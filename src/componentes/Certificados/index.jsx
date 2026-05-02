export function Certificado() {

const certificados = [
{
    id: 1,
    provider: "AWS",
    curso: "Solutions Architect Associate",
    certificado: "https://via.placeholder.com/800"
},
{
    id: 2,
    provider: "GOOGLE",
    curso: "Professional Cloud Developer",
    certificado: "https://via.placeholder.com/800"
},
{
    id: 3,
    provider: "META",
    curso: "Advanced React Patterns",
    certificado: "https://via.placeholder.com/800"
},
{
    id: 4,
    provider: "ORACLE",
    curso: "Certified Professional Java SE",
    certificado: "https://via.placeholder.com/800"
}
];

return (
<section className="bg-(--color-bg) px-6 py-20 scroll-mt-24" id="Certificados">

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
        <div className="mt-6 flex items-center justify-between">

            <button
            onClick={() => window.open(cert.certificado, "_blank")}
            className="text-sm text-(--color-text-muted) group-hover:text-(--color-accent) transition"
            >
            Ver certificado
            </button>

            <span className="text-(--color-text-muted) group-hover:text-(--color-accent) group-hover:translate-x-1 transition">
            →
            </span>

        </div>

        </div>
    ))}

    </div>
</section>
);
}