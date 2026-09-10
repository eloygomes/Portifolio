import * as THREE from "three";

export function createContactNetwork(host: HTMLElement) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 100);
  camera.position.z = 19;
  const group = new THREE.Group();
  scene.add(group);
  // Preallocate buffers; setDrawRange exposes only the connected pairs each frame.
  const count = matchMedia("(max-width: 640px)").matches ? 45 : 110;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - .5) * 10;
    velocities[i] = (Math.random() - .5) * .24;
  }
  const linePositions = new Float32Array(count * (count - 1) * 3);
  const lineColors = new Float32Array(linePositions.length);
  const geometry = new THREE.BufferGeometry();
  const positionAttribute = new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage);
  const colorAttribute = new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute("position", positionAttribute);
  geometry.setAttribute("color", colorAttribute);
  geometry.setDrawRange(0, 0);
  const material = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: .65, depthWrite: false });
  const lines = new THREE.LineSegments(geometry, material);
  lines.frustumCulled = false;
  group.add(lines);
  const connections = new Uint8Array(count);
  const update = (dt: number) => {
    for (let i = 0; i < positions.length; i++) {
      positions[i] += velocities[i] * dt;
      if (Math.abs(positions[i]) > 5) {
        positions[i] = THREE.MathUtils.clamp(positions[i], -5, 5);
        velocities[i] *= -1;
      }
    }
    connections.fill(0);
    let cursor = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (connections[i] >= 8 || connections[j] >= 8) continue;
        const a = i * 3, b = j * 3;
        const distance = Math.hypot(positions[a] - positions[b], positions[a + 1] - positions[b + 1], positions[a + 2] - positions[b + 2]);
        if (distance >= 3) continue;
        connections[i]++; connections[j]++;
        const brightness = (1 - distance / 3) * .8;
        for (const offset of [a, b]) {
          for (let axis = 0; axis < 3; axis++) {
            linePositions[cursor] = positions[offset + axis];
            lineColors[cursor++] = brightness;
          }
        }
      }
    }
    geometry.setDrawRange(0, cursor / 3);
    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let visible = false, lost = false, frame = 0, previous = 0;
  const draw = () => renderer.render(scene, camera);
  const loop = (now: number) => {
    frame = 0;
    const dt = Math.min((now - previous) / 1000, .05);
    previous = now;
    update(dt); group.rotation.y += dt * .035; draw();
    frame = requestAnimationFrame(loop);
  };
  const sync = () => {
    cancelAnimationFrame(frame); frame = 0;
    if (lost) return;
    if (visible && !document.hidden && !reduced.matches) {
      previous = performance.now(); frame = requestAnimationFrame(loop);
    } else if (visible) draw();
  };
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(Math.max(width, 1), Math.max(height, 1));
    camera.aspect = width / Math.max(height, 1);
    camera.position.z = camera.aspect < 1 ? 25 : 19;
    camera.updateProjectionMatrix();
    if (!lost) draw();
  };
  const onLost = (event: Event) => { event.preventDefault(); lost = true; cancelAnimationFrame(frame); renderer.domElement.style.visibility = "hidden"; };
  const onRestored = () => { lost = false; renderer.domElement.style.visibility = ""; sync(); };
  renderer.domElement.addEventListener("webglcontextlost", onLost);
  renderer.domElement.addEventListener("webglcontextrestored", onRestored);
  host.appendChild(renderer.domElement);
  update(0); resize();
  const sizes = new ResizeObserver(resize); sizes.observe(host);
  const visibility = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
  visibility.observe(host);
  document.addEventListener("visibilitychange", sync);
  reduced.addEventListener("change", sync);
  return () => {
    cancelAnimationFrame(frame); sizes.disconnect(); visibility.disconnect();
    document.removeEventListener("visibilitychange", sync); reduced.removeEventListener("change", sync);
    renderer.domElement.removeEventListener("webglcontextlost", onLost);
    renderer.domElement.removeEventListener("webglcontextrestored", onRestored);
    geometry.dispose(); material.dispose(); renderer.dispose(); renderer.domElement.remove();
  };
}
