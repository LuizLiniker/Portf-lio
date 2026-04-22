export function Habilidade() {

    const skills = [
        { id: 1, nome: "React.js", icone: "https://via.placeholder.com/50", descricaoIcone: "React logo" },
        { id: 2, nome: "Node.js", icone: "https://via.placeholder.com/50", descricaoIcone: "Node logo" },
        { id: 3, nome: "Python", icone: "https://via.placeholder.com/50", descricaoIcone: "Python logo" },
        { id: 4, nome: "N8N", icone: "https://via.placeholder.com/50", descricaoIcone: "N8N logo" }
    ];

    return (
        <section className="bg-(--color-neutral) px-4 py-16">

            {/* título */}
            <div className="max-w-6xl mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl text-white font-(--text-heandline)">
                    Habilidades
                </h2>
            </div>

            {/* grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {skills.map(skill => (
                    <div 
                        key={skill.id} 
                        className="bg-(--color-secondary) rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition"
                    >
                        <img 
                            src={skill.icone} 
                            alt={skill.descricaoIcone} 
                            className="w-12 h-12 mb-3"
                        />
                        <p className="text-white text-sm font-medium">
                            {skill.nome}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}