export function Home() {
return (
    <>
        <section className="text-center p-45 bg-(--color-secondary)">
            <h3 className="text-green-500 border border-green-500 mx-120 my-5 rounded-xl">Disponível para projetos</h3>
            <h1 className="font-(--text-heandline) text-4xl font-medium text-white tracking-wide ">Desenvolvedor <span className="text-(--color-primary)">Full Stack</span> em formação</h1>
            <p className="font-(--text-body) text-gray-400 py-5 text-justify mx-45">
                Estou iniciando minha jornada como <span className="text-white font-medium">desenvolvedor Full Stack</span>, focado na criação de aplicações web modernas e interfaces responsivas. Tenho estudado e praticado React e Node.js, com objetivo de evoluir para o ecossistema completo de desenvolvimento web, incluindo Next.js. Atualmente desenvolvo projetos práticos para consolidar meus conhecimentos e aprimorar minhas habilidades em boas práticas e arquitetura de aplicações. Também tenho interesse em Inteligência Artificial e pretendo aprofundar meus estudos na área.
            </p>
            <div className=" flex justify-center">
                <ul className="flex gap-5">
                    <li className="bg-(--color-primary) rounded-xl p-2" >
                        <a href="#Projetos">Ver Projetos</a>
                    </li>
                    <li className="border border-white rounded-xl p-2 text-white ">
                        <a href="#Contato">Contato</a>
                    </li>
                </ul>
            </div>

        </section>
    </>
);
}
