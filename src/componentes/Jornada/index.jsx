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
        <section className="bg-(--color-secondary) px-4 py-20">

            {/* Título */}
            <div className="text-center mb-16">
                <h2 className="text-white text-3xl font-(--text-heandline)">
                    Jornada Profissional
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">

                {/* linha central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-700"></div>

                <div className="space-y-16">

                    {trabalho.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={item.id}
                                className={`relative flex items-center justify-between`}
                            >

                                {/* CARD */}
                                <div className={`w-5/12 ${isLeft ? "text-right" : "text-left order-2"}`}>

                                    <div className="bg-(--color-neutral) p-5 rounded-xl shadow-md hover:scale-[1.02] transition">

                                        <h3 className="text-white font-semibold">
                                            {item.empresa}
                                        </h3>

                                        <p className="text-sm text-gray-400">
                                            {item.cargo}
                                        </p>

                                        <span className="text-xs text-gray-500">
                                            {item.periodo}
                                        </span>

                                        <p className="text-gray-300 mt-3 text-sm">
                                            {item.descricao}
                                        </p>

                                    </div>
                                </div>

                                {/* PONTO CENTRAL */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-4 h-4 bg-(--color-primary) rounded-full border-4 border-gray-900"></div>
                                </div>

                                {/* ESPAÇO DO OUTRO LADO */}
                                <div className="w-5/12"></div>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}