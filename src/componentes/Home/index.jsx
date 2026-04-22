export function Home() {
return (
<>
    <section className="bg-(--color-secondary) text-center px-4 py-16">
    <div className="max-w-3xl mx-auto">
        <span className="text-green-500 border border-green-500 px-4 py-1 rounded-full text-sm">
        Disponível para projetos
        </span>

        <h1 className="font-(--text-heandline) text-3xl md:text-4xl font-medium text-white mt-6">
        Desenvolvedor{" "}
        <span className="text-(--color-primary)">Full Stack</span> em formação
        </h1>

        <p className="font-(--text-body) text-gray-400 mt-4">
        Desenvolvo aplicações web modernas e responsivas utilizando React e Node.js.
        Atualmente evoluindo para o ecossistema completo com Next.js e explorando
        boas práticas de desenvolvimento.
        </p>

        <div className="flex justify-center gap-4 mt-6">
        <a
            href="#Projetos"
            className="bg-(--color-primary) px-4 py-2 rounded-md"
        >
            Ver Projetos
        </a>

        <a
            href="#Contato"
            className="border border-white text-white px-4 py-2 rounded-md"
        >
            Contato
        </a>
        </div>
    </div>
    </section>
</>
);
}