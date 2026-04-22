export function Projeto() {

const card_projeto = [
{
    id: 1,
    img: "https://via.placeholder.com/300",
    descricao_img: "Fluxo de caixa",
    titulo: "Fluxo de caixa - Integrado com IA",
    descricao: "Fluxo de caixa integrado com API do WhatsApp e IA (Claude)",
    github: "#",
    linguagens: ["Next.js", "Node.js", "N8N", "Supabase"],
},
{
    id: 2,
    img: "https://via.placeholder.com/300",
    descricao_img: "Sistema RPG",
    titulo: "Sistema RPG",
    descricao: "App que transforma metas em um sistema de RPG com XP e progresso",
    github: "#",
    linguagens: ["Next.js", "Node.js", "N8N", "SQL"],
}
];

return (
<section className="bg-(--color-secondary) px-4 py-16">

    {/* Título da seção */}
    <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl text-white font-(--text-heandline)">
            Projetos
        </h2>
        <p className="text-gray-400 mt-2">
            Alguns projetos que desenvolvi para praticar e evoluir minhas habilidades.
        </p>
    </div>

    {/* Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {card_projeto.map((card) => (
            <div 
                key={card.id} 
                className="rounded-2xl overflow-hidden bg-(--color-neutral) shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >

                <img
                    className="w-full h-48 object-cover"
                    src={card.img}
                    alt={card.descricao_img}
                />

                <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">
                        {card.titulo}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                        {card.descricao}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {card.linguagens.map((lang, i) => (
                            <span 
                                key={i} 
                                className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>

                    <a
                        href={card.github}
                        className="inline-block bg-(--color-primary) text-black px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
                    >
                        Ver projeto
                    </a>
                </div>

            </div>
        ))}

    </div>

</section>
);
}