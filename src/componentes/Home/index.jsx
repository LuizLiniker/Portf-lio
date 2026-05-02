import { Reveal } from "../Reveal/index";

export function Home() {
return (
<section
    id="Início"
    className="scroll-mt-24 bg-(--color-bg) px-4 py-24 text-center"
>
    <div className="max-w-3xl mx-auto space-y-6">

    {/* STATUS */}
    <Reveal>
        <span className="text-xs uppercase tracking-widest text-(--color-primary)">
        Disponível para oportunidades
        </span>
    </Reveal>

    {/* TÍTULO */}
    <Reveal delay={0.1}>
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-text) leading-tight">
        Desenvolvedor{" "}
        <span className="text-(--color-primary)">Full Stack</span> em formação
        </h1>
    </Reveal>

    {/* DESCRIÇÃO */}
    <Reveal delay={0.2}>
        <p className="text-(--color-text-muted) max-w-xl mx-auto">
        Construo aplicações modernas com foco em performance, automação e experiências inteligentes usando IA.
        </p>
    </Reveal>

    {/* BOTÕES */}
    <Reveal delay={0.3}>
        <div className="flex justify-center gap-4 pt-4">

        <a
            href="#Projetos"
            className="bg-(--color-primary) text-black px-5 py-2 rounded-md hover:opacity-90 transition"
        >
            Ver Projetos
        </a>

        <a
            href="#Contato"
            className="border border-(--color-border) text-(--color-text) px-5 py-2 rounded-md hover:border-(--color-primary) transition"
        >
            Contato
        </a>

        </div>
    </Reveal>

    </div>
</section>
);
}