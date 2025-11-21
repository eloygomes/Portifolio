const NAV_ITEMS = [
  {
    id: "bio",
    href: "#bio",
    label: "BIO",
    description: "Quem eu sou e minha jornada.",
  },
  {
    id: "port",
    href: "#port",
    label: "PORTFÓLIO",
    description: "Projetos e estudos em destaque.",
  },
  {
    id: "carreira",
    href: "#carreira",
    label: "CARREIRA",
    description: "Experiência profissional e formação.",
  },
  {
    id: "services",
    href: "#services",
    label: "SERVIÇOS",
    description: "O que eu posso fazer pelo seu projeto.",
  },
  {
    id: "contato",
    href: "#contato",
    label: "CONTATO",
    description: "Vamos conversar sobre ideias e oportunidades.",
  },
];

// eslint-disable-next-line react/prop-types
export default function NavBarMobileItems({ setMobileShowMenu }) {
  const handleNavigate = (event, href) => {
    event.preventDefault();

    // fecha o menu
    if (typeof setMobileShowMenu === "function") {
      setMobileShowMenu(false);
    }

    // depois que o menu fecha, rola até a seção
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <div className="flex h-full flex-col justify-between px-6 py-10">
      {/* Bloco de navegação */}
      <div>
        <div className="mb-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
            MENU
          </p>
        </div>

        <nav className="space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavigate(e, item.href)}
              className="group block rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-center transition
                         hover:border-white/20 hover:bg-white/10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white group-hover:text-white">
                {item.label}
              </span>
              <span className="mt-1 block text-[11px] leading-snug text-white/60 group-hover:text-white/80">
                {item.description}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bloco de call-to-action */}
      <div className="mt-10 border-t border-white/5 pt-6">
        <p className="mb-3 text-center text-[10px] uppercase tracking-[0.25em] text-white/40">
          Download
        </p>

        {/* Botão com link mock, usando as cores atuais */}
        <button
          type="button"
          onClick={() => {
            if (typeof setMobileShowMenu === "function") {
              setMobileShowMenu(false);
            }
          }}
          className="block w-full rounded-2xl bg-[#D6223B] px-4 py-3 text-center text-xs font-semibold uppercase
                     tracking-[0.2em] text-white shadow-lg shadow-black/30 transition
                     hover:bg-[#f1354f] active:scale-[0.99]"
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            DOWNLOAD CV
          </a>
        </button>

        <p className="mt-3 text-center text-[11px] text-white/60">
          Pronto para novas oportunidades, freelas e projetos interessantes.
        </p>
      </div>
    </div>
  );
}
