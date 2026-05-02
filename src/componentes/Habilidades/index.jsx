import { Reveal } from "../Reveal/index";

export function Habilidade() {
const skills = ["React", "Node.js", "Next.js", "Python", "N8N"];

return (
<section id="Habilidades" className="scroll-mt-24 bg-(--color-bg) px-4 py-20">

    <div className="max-w-6xl mx-auto mb-10">
    <Reveal>
        <h2 className="text-white text-3xl font-bold">Habilidades</h2>
    </Reveal>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">

    {skills.map((skill, i) => (
        <Reveal key={i} delay={i * 0.05}>
        <div className="bg-(--color-surface) p-5 rounded-xl text-center border border-(--color-border)">
            <p className="text-(--color-text)">{skill}</p>
        </div>
        </Reveal>
    ))}

    </div>

</section>
);
}