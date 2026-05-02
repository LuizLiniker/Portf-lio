import { useEffect, useState } from "react";

export function Navbar({ dark, toggleTheme }) {
const [aberto, setAberto] = useState(false);
const [active, setActive] = useState("Início");

const links = [
{ nome: "Início", href: "Início" },
{ nome: "Sobre", href: "Sobre" },
{ nome: "Projetos", href: "Projetos" },
{ nome: "Habilidades", href: "Habilidades" },
{ nome: "Experiências", href: "Experiências" },
{ nome: "Certificados", href: "Certificados" },
{ nome: "Contato", href: "Contato" }
];

const scrollTo = (id) => {
const el = document.getElementById(id);
if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setAberto(false);
}
};

/* SCROLL SPY */
useEffect(() => {
const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        setActive(entry.target.id);
        }
    });
    },
    { threshold: 0.6 }
);

links.forEach((l) => {
    const el = document.getElementById(l.href);
    if (el) observer.observe(el);
});

return () => observer.disconnect();
}, []);

return (
<header className="fixed top-0 w-full z-50 backdrop-blur bg-(--color-bg)/80 border-b border-(--color-border)">

    <div className="flex justify-between items-center px-6 md:px-12 py-4">

    {/* LOGO */}
    <h1 className="text-(--color-primary) font-bold tracking-widest">
        LINIKER<span className="text-(--color-accent)">.DEV</span>
    </h1>

    {/* DESKTOP */}
    <nav className="hidden md:flex items-center gap-6">

        {links.map((link) => (
        <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className={`relative transition ${
            active === link.href
                ? "text-(--color-accent)"
                : "text-(--color-text-muted)"
            } hover:text-(--color-accent)`}
        >
            {link.nome}

            {active === link.href && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-(--color-accent) shadow-[var(--color-glow)]"></span>
            )}
        </button>
        ))}

        {/* THEME */}
        <button
        onClick={toggleTheme}
        className="p-2 rounded-md border border-(--color-border) bg-(--color-surface)"
        >
        {dark ? "☀️" : "🌙"}
        </button>

        {/* DOWNLOAD CV */}
        <a
        href="/cv.pdf"
        download
        className="bg-(--color-primary) text-white px-4 py-2 rounded-md hover:shadow-[var(--color-glow)] transition"
        >
        CV
        </a>

    </nav>

    {/* MOBILE */}
    <div className="md:hidden flex items-center gap-3">

        {/* THEME */}
        <button onClick={toggleTheme}>
        {dark ? "☀️" : "🌙"}
        </button>

        {/* HAMBURGUER */}
        <button
        onClick={() => setAberto(!aberto)}
        className="text-(--color-primary) text-2xl"
        >
        ☰
        </button>

        {/* MENU MOBILE */}
        {aberto && (
        <div className="absolute top-full right-4 mt-2 w-56 bg-(--color-surface) border border-(--color-border) rounded-lg shadow-lg p-4 flex flex-col gap-3">

            {links.map((link) => (
            <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-(--color-text-muted) hover:text-(--color-accent)"
            >
                {link.nome}
            </button>
            ))}

            {/* CV MOBILE */}
            <a
            href="/cv.pdf"
            download
            className="text-center bg-(--color-primary) text-white py-2 rounded-md"
            >
            Baixar CV
            </a>

        </div>
        )}

    </div>

    </div>
</header>
);
}