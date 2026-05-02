import { Reveal } from "../Reveal/index";

const projects = [
{
id: 1,
titulo: "Fluxo de Caixa Inteligente",
descricao:
    "Sistema financeiro automatizado com WhatsApp e IA para análise de gastos.",
impacto: "Redução de processos manuais financeiros",
tipo: "Automação + IA",
stack: ["Next.js", "Node.js", "Supabase", "AI", "N8N"],
demo: "#",
github: "#",
img: "/fluxo-caixa.png"
},
{
id: 2,
titulo: "Sistema RPG de Produtividade",
descricao:
    "Transforma metas em RPG com XP e níveis para aumentar consistência.",
impacto: "Aumento de motivação e disciplina",
tipo: "Gamificação",
stack: ["Next.js", "Node.js", "SQL"],
demo: "#",
github: "#",
img: "/rpg.png"
}
];

export function Projeto() {
return (
<section
    id="Projetos"
    className="scroll-mt-24 bg-(--color-bg) px-4 py-20"
>
    {/* HEADER */}
    <div className="max-w-6xl mx-auto mb-12">

    <Reveal>
        <h2 className="text-(--color-text) text-3xl font-bold">
        Projetos
        </h2>
    </Reveal>

    <Reveal delay={0.1}>
        <p className="text-(--color-text-muted) mt-2">
        Produtos reais focados em automação, IA e performance.
        </p>
    </Reveal>

    </div>

    {/* GRID */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

    {projects.map((card, i) => (
        <Reveal key={card.id} delay={i * 0.1}>

        <div className="group bg-(--color-surface) rounded-2xl overflow-hidden border border-(--color-border) hover:border-(--color-primary)/40 transition">

            {/* IMAGEM */}
            <img
            src={card.img}
            alt={card.titulo}
            className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-5 space-y-3">

            {/* TAG */}
            <span className="text-xs text-(--color-primary) uppercase tracking-widest">
                {card.tipo}
            </span>

            {/* TÍTULO */}
            <h3 className="text-(--color-text) text-lg font-semibold">
                {card.titulo}
            </h3>

            {/* DESCRIÇÃO */}
            <p className="text-(--color-text-muted) text-sm">
                {card.descricao}
            </p>

            {/* IMPACTO */}
            <p className="text-(--color-text-muted)/70 text-xs italic">
                {card.impacto}
            </p>

            {/* STACK */}
            <div className="flex flex-wrap gap-2 pt-2">
                {card.stack.map((tech, i) => (
                <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-(--color-bg) text-(--color-text-muted) border border-(--color-border)"
                >
                    {tech}
                </span>
                ))}
            </div>

            {/* BOTÕES */}
            <div className="flex gap-3 pt-4">

                <a
                href={card.demo}
                className="flex-1 text-center bg-(--color-primary) text-black py-2 rounded-md hover:opacity-90 transition"
                >
                Demo
                </a>

                <a
                href={card.github}
                className="flex-1 text-center border border-(--color-border) text-(--color-text) py-2 rounded-md hover:border-(--color-primary) transition"
                >
                GitHub
                </a>

            </div>

            </div>
        </div>

        </Reveal>
    ))}

    </div>
</section>
);
}