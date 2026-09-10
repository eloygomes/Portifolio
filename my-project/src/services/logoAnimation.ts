import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import fontData from "three/examples/fonts/helvetiker_bold.typeface.json";

export function animateLogo(host: HTMLElement, control: HTMLButtonElement, interactive = true) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(57, 41);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 57 / 41, .1, 40);
  // Keep the fixed 57 x 41 canvas, but leave enough optical padding for the
  // bevel and the outer letters while the word rotates in perspective.
  camera.position.z = 3.3;
  const geometry = new TextGeometry("EVG", {
    font: new FontLoader().parse(fontData), size: 1, depth: .22,
    curveSegments: 6, bevelEnabled: true, bevelThickness: .025,
    bevelSize: .018, bevelSegments: 3,
  });
  geometry.center();
  const front = new THREE.MeshBasicMaterial();
  const sides = new THREE.MeshPhongMaterial({ shininess: 80 });
  const logo = new THREE.Mesh(geometry, [front, sides]);
  scene.add(logo, new THREE.AmbientLight(0xffffff, 1.5));
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(3, 4, 6); scene.add(light);
  host.appendChild(renderer.domElement);
  const header = control.closest("header")!;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0, rotationTimer = 0, colorTimer = 0;
  let pointer: number | null = null;
  let startX = 0, startY = 0, initialRotation = 0, dragged = false;
  let lastX = 0, lastMoveTime = 0, angularVelocity = 0;
  let suppressClick = false, customColor = false, returnStart = 0, returnAngle = 0;
  const draw = () => renderer.render(scene, camera);
  const baseColor = () => getComputedStyle(host).color;
  const setColor = (color: string) => { front.color.set(color); sides.color.set(color); draw(); };
  const luminance = (hex: string) => {
    const n = parseInt(hex.slice(1), 16);
    const rgb = [n >> 16, (n >> 8) & 255, n & 255].map(v => {
      const c = v / 255; return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
    });
    return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
  };
  const randomColor = () => {
    const bg = luminance(header.getAttribute("data-tone") === "light" ? "#f0edf4" : "#0e0b1a");
    const candidates = ["#9b174d", "#164ead", "#116348", "#713ca8", "#a33a12", "#ff729a", "#71d5ff", "#72e3b1", "#cab0ff", "#ffd276"];
    const eligible = candidates.filter(color => {
      const value = luminance(color);
      return (Math.max(value, bg) + .05) / (Math.min(value, bg) + .05) >= 4.5 && "#" + front.color.getHexString() !== color;
    });
    setColor(eligible[Math.floor(Math.random() * eligible.length)]);
  };
  const changeColor = () => {
    customColor = true; randomColor(); clearTimeout(colorTimer);
    colorTimer = window.setTimeout(() => { customColor = false; setColor(baseColor()); }, 2000);
  };
  const tick = (now: number) => {
    const t = Math.min((now - returnStart) / 450, 1);
    logo.rotation.y = returnAngle * (1 - t * t * (3 - 2 * t)); draw();
    frame = t < 1 ? requestAnimationFrame(tick) : 0;
  };
  const scheduleReturn = (delay = 1000) => {
    clearTimeout(rotationTimer);
    rotationTimer = window.setTimeout(() => {
      if (reduced.matches) { logo.rotation.y = 0; draw(); return; }
      // Return by the shortest arc, even after several full rotations.
      logo.rotation.y = Math.atan2(Math.sin(logo.rotation.y), Math.cos(logo.rotation.y));
      returnStart = performance.now(); returnAngle = logo.rotation.y;
      frame = requestAnimationFrame(tick);
    }, delay);
  };
  const coast = () => {
    if (reduced.matches) { scheduleReturn(); return; }
    const started = performance.now();
    const angle = logo.rotation.y;
    const velocity = angularVelocity;
    const duration = 2000;
    const spin = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      // Integral of v(t) = v0 * (1 - t / duration)^2:
      // frame-rate independent motion that reaches zero speed at two seconds.
      logo.rotation.y = angle + velocity * duration / 3 * (1 - (1 - progress) ** 3);
      draw();
      if (progress < 1) frame = requestAnimationFrame(spin);
      else { frame = 0; scheduleReturn(0); }
    };
    frame = requestAnimationFrame(spin);
  };
  const down = (event: PointerEvent) => {
    if (event.button !== 0 || pointer !== null) return;
    clearTimeout(rotationTimer); cancelAnimationFrame(frame);
    pointer = event.pointerId; startX = event.clientX; startY = event.clientY;
    initialRotation = logo.rotation.y; dragged = false; suppressClick = false;
    lastX = event.clientX; lastMoveTime = performance.now(); angularVelocity = 0;
    control.setPointerCapture(pointer);
  };
  const move = (event: PointerEvent) => {
    if (pointer !== event.pointerId) return;
    const dx = event.clientX - startX;
    const now = performance.now();
    const delta = event.clientX - lastX;
    if (delta !== 0) {
      const measured = delta * .018 / Math.max(now - lastMoveTime, 8);
      angularVelocity = THREE.MathUtils.clamp(measured, -.018, .018);
      lastX = event.clientX; lastMoveTime = now;
    }
    if (Math.hypot(dx, event.clientY - startY) > 5) dragged = true;
    if (dragged) { logo.rotation.y = initialRotation + dx * .018; draw(); }
  };
  const release = (event: PointerEvent) => {
    if (pointer !== event.pointerId) return;
    pointer = null; suppressClick = dragged || event.type !== "pointerup";
    if (control.hasPointerCapture(event.pointerId)) control.releasePointerCapture(event.pointerId);
    if (dragged && event.type === "pointerup" && Math.abs(angularVelocity) > 0) coast();
    else scheduleReturn();
  };
  const click = (event: MouseEvent) => { if (suppressClick && event.detail !== 0) { suppressClick = false; return; } changeColor(); };
  const key = (event: KeyboardEvent) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault(); clearTimeout(rotationTimer); cancelAnimationFrame(frame);
    logo.rotation.y += event.key === "ArrowLeft" ? -.25 : .25;
    draw(); scheduleReturn();
  };
  const observer = new MutationObserver(() => { if (customColor) randomColor(); else setColor(baseColor()); });
  observer.observe(header, { attributes: true, attributeFilter: ["data-tone"] });
  const lost = (event: Event) => {
    event.preventDefault(); cancelAnimationFrame(frame);
    control.classList.remove("logo-rendering");
  };
  if (interactive) {
    control.addEventListener("pointerdown", down);
    control.addEventListener("pointermove", move);
    control.addEventListener("pointerup", release);
    control.addEventListener("pointercancel", release);
    control.addEventListener("lostpointercapture", release);
    control.addEventListener("click", click);
    control.addEventListener("keydown", key);
  }
  renderer.domElement.addEventListener("webglcontextlost", lost);
  setColor(baseColor()); control.classList.add("logo-rendering");
  return () => {
    clearTimeout(rotationTimer); clearTimeout(colorTimer); cancelAnimationFrame(frame); observer.disconnect();
    if (interactive) {
      control.removeEventListener("pointerdown", down); control.removeEventListener("pointermove", move);
      control.removeEventListener("pointerup", release); control.removeEventListener("pointercancel", release);
      control.removeEventListener("lostpointercapture", release);
      control.removeEventListener("click", click); control.removeEventListener("keydown", key);
    }
    renderer.domElement.removeEventListener("webglcontextlost", lost);
    control.classList.remove("logo-rendering");
    geometry.dispose(); front.dispose(); sides.dispose(); renderer.dispose(); renderer.domElement.remove();
  };
}
