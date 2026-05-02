export function Jornada() {

const trabalho = [
{
    id: 1,
    empresa: "K&K CONTABILIDADE",
    cargo: "Estágio Administrativo",
    periodo: "2023 - 2024",
    descricao: "Apoio em rotinas administrativas e organização de documentos."
},
{
    id: 2,
    empresa: "MGM PORTAS E JANELAS",
    cargo: "Auxiliar Administrativo",
    periodo: "2024 - Atual",
    descricao: "Atendimento e suporte operacional em processos internos."
}
];

return (
<section className="bg-(--color-bg) px-4 py-20 scroll-mt-24" id="Experiências">

    {/* TÍTULO */}
    <div className="text-center mb-16">
    <h2 className="text-(--color-text) text-3xl font-(--text-headline)">
        Jornada Profissional
    </h2>

    {/* detalhe neon */}
    <div className="mx-auto mt-4 h-1 w-24 bg-(--color-accent) rounded-full shadow-[var(--color-glow)]"></div>
    </div>

    {/* TIMELINE */}
    <div className="relative max-w-5xl mx-auto">

    {/* LINHA CENTRAL */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-(--color-border)"></div>

    <div className="space-y-16">

        {trabalho.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
            <div key={item.id} className="relative flex items-center justify-between">

            {/* CARD */}
            <div className={`w-5/12 ${isLeft ? "text-right" : "text-left order-2"}`}>

                <div className="bg-(--color-surface) border border-(--color-border) p-5 rounded-xl shadow-md hover:shadow-[var(--color-glow)] hover:-translate-y-1 transition">

                <h3 className="text-(--color-text) font-semibold">
                    {item.empresa}
                </h3>

                <p className="text-sm text-(--color-text-muted)">
                    {item.cargo}
                </p>

                <span className="text-xs text-(--color-text-muted)">
                    {item.periodo}
                </span>

                <p className="text-(--color-text-muted) mt-3 text-sm">
                    {item.descricao}
                </p>

                </div>
            </div>

            {/* PONTO CENTRAL */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 bg-(--color-primary) rounded-full border-4 border-(--color-bg) shadow-[var(--color-glow)]"></div>
            </div>

            {/* ESPAÇO */}
            <div className="w-5/12"></div>

            </div>
        );
        })}

    </div>
    </div>
</section>
);
}