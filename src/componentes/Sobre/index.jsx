export function Sobre() {
return (
<section className="px-4 py-16 bg-(--color-bg) scroll-mt-24" id="Sobre">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* IMAGEM */}
    <img
        className="w-full max-w-sm rounded-xl object-cover border border-(--color-border) shadow-lg hover:shadow-[var(--color-glow)] transition"
        src="./luiz.jpeg"
        alt="Imagem de Luiz Liniker"
    />

    {/* TEXTO */}
    <div>
        <h2 className="font-(--text-headline) text-3xl text-(--color-text) mb-4">
        Sobre mim
        </h2>

        <p className="font-(--text-body) text-(--color-text-muted)">
        Sou um desenvolvedor em transição para a área de tecnologia, com
        dedicação contínua ao desenvolvimento web. Meu foco é me tornar um
        desenvolvedor full stack, trabalhando com Node.js no back-end e
        React com Next.js no front-end.
        </p>

        <p className="font-(--text-body) text-(--color-text-muted) mt-4">
        Acredito no aprendizado através da prática, por isso desenvolvo
        projetos que fortalecem minhas habilidades em código limpo,
        organização e boas práticas. Atualmente, busco minha primeira
        oportunidade na área para aplicar meus conhecimentos e crescer
        como profissional.
        </p>

        {/* DETALHE NEON */}
        <div className="mt-6 h-1 w-24 rounded-full bg-(--color-accent) shadow-[var(--color-glow)]"></div>
    </div>

    </div>
</section>
);
}