export function Certificado() {
const certificados = [
{
    id: 1,
    provider: "ALURA",
    curso: "Lógica de programação: Mergulhe em programação com JavasScript",
    certificado: "/certificados/Lógica de programação.pdf",
},
{
    id: 2,
    provider: "ALURA",
    curso: "React 19: Jsx, componentes, form action e usestate",
    certificado: "/certificados/React.pdf",
},
{
    id: 3,
    provider: "INATEL",
    curso: "Trilha: Desenvolvimento de Software e Aplicativo",
    certificado: "/certificados/Inatel.pdf",
},
];

return (
    <section
    className="bg-(--color-bg) px-6 py-20 scroll-mt-24"
    id="Certificados">
    {/* TÍTULO */}
    <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-(--color-text) text-2xl md:text-3xl font-(--text-headline)">
            Certifications & Credentials
        </h2>

        {/* detalhe neon */}
        <div className="mt-3 h-1 w-24 bg-(--color-accent) rounded-full shadow-[var(--color-glow)]"></div>
    </div>

    {/* GRID */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {certificados.map((cert) => (
        <div
        key={cert.id}
        className="bg-(--color-surface) p-5 rounded-xl border border-(--color-border) hover:border-(--color-secondary) hover:shadow-[var(--color-glow)] transition group"
        >
        {/* PROVIDER */}
        <span className="text-xs tracking-widest text-(--color-accent) font-semibold">
            {cert.provider}
        </span>

        {/* CURSO */}
        <h3 className="text-(--color-text) mt-2 font-medium leading-snug">
            {cert.curso}
        </h3>

        {/* AÇÃO */}
        <div className="mt-6">
            <button
            onClick={() => window.open(cert.certificado, "_blank")}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium border border-(--color-border) text-(--color-text-muted) group-hover:border-(--color-accent) group-hover:text-(--color-accent) group-hover:shadow-[var(--color-glow)] transition-all duration-300"
            >
            Ver certificado
            <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
            </span>
            </button>
        </div>
        </div>
    ))}
    </div>
</section>
);
}
