export function Sobre() {
return (
<>
    <section className="px-4 py-16 bg-(--color-neutral)">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
        className="w-full max-w-sm rounded-lg shadow-lg object-cover"
        src="./luiz.jpeg"
        alt="Imagem de Luiz Liniker"
        />

        <div>
        <h2 className="font-(--text-heandline) text-2xl text-white mb-4">
            Sobre mim
        </h2>

        <p className="font-(--text-body) text-gray-400">
            Sou um desenvolvedor em transição para a área de tecnologia, com
            dedicação contínua ao desenvolvimento web. Meu foco é me tornar um
            desenvolvedor full stack, trabalhando com Node.js no back-end e
            React com Next.js no front-end.
        </p>

        <p className="font-(--text-body) text-gray-400 mt-4">
            Acredito no aprendizado através da prática, por isso desenvolvo
            projetos que fortalecem minhas habilidades em código limpo,
            organização e boas práticas. Atualmente, busco minha primeira
            oportunidade na área para aplicar meus conhecimentos e crescer
            como profissional.
        </p>
        </div>
    </div>
    </section>
</>
);
}
