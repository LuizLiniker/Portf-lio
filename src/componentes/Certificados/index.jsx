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
<section className="bg-(--color-neutral) px-6 py-20">

    {/* título */}
    <div className="max-w-6xl mx-auto mb-10">
    <h2 className="text-white text-2xl md:text-3xl font-semibold">
        Certifications & Credentials
    </h2>
    </div>

    {/* grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {certificados.map((cert) => (
        <div
        key={cert.id}
        className="bg-[#111a2e] p-5 rounded-xl border border-white/5 hover:border-white/10 transition group"
        >

        {/* provider */}
        <span className="text-xs tracking-widest text-blue-300 font-semibold">
            {cert.provider}
        </span>

        {/* curso */}
        <h3 className="text-white mt-2 font-medium leading-snug">
            {cert.curso}
        </h3>

        {/* ação */}
        <div className="mt-6 flex items-center justify-between">

            <button
            onClick={() => window.open(cert.certificado, "_blank")}
            className="text-sm text-gray-400 group-hover:text-white transition"
            >
            Ver certificado
            </button>

            <span className="text-gray-400 group-hover:translate-x-1 transition">
            →
            </span>

        </div>

        </div>
    ))}

    </div>
</section>
);
}