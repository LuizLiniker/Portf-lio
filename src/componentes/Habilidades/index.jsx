import { Reveal } from "../Reveal/index";
import {
SiJavascript,
SiReact,
SiPython,
SiNodedotjs,
SiNextdotjs,
} from "react-icons/si";
import { TbAffiliate } from "react-icons/tb";

const skills = [
{ tech: "JavaScript", icon: SiJavascript, nivel: "Aprendendo",    cor: "#EAB308" },
{ tech: "React",      icon: SiReact,      nivel: "Aprendendo",    cor: "#22D3EE" },
{ tech: "Python",     icon: SiPython,     nivel: "Básico",        cor: "#818CF8" },
{ tech: "Node.js",    icon: SiNodedotjs,  nivel: "Básico",        cor: "#A855F7" },
{ tech: "Next.js",    icon: SiNextdotjs,  nivel: "Aprendendo",    cor: "#C084FC" },
{ tech: "N8N",        icon: TbAffiliate,  nivel: "Aprendendo", cor: "#22D3EE" },
];

const nivelStyle = {
"Aprendendo":    "border text-xs px-2 py-1 rounded-full font-medium",
"Básico":        "border text-xs px-2 py-1 rounded-full font-medium",
"Intermediário": "border text-xs px-2 py-1 rounded-full font-medium",
};

const nivelVar = {
"Aprendendo":    { color: "var(--color-accent)",    border: "rgba(34,211,238,0.3)",  bg: "rgba(34,211,238,0.08)"  },
"Básico":        { color: "var(--color-highlight)", border: "rgba(192,132,252,0.3)", bg: "rgba(192,132,252,0.08)" },
"Intermediário": { color: "var(--color-secondary)", border: "rgba(168,85,247,0.3)",  bg: "rgba(168,85,247,0.08)"  },
};

export function Habilidade() {
return (
<section id="Habilidades" className="scroll-mt-24 px-4 py-20" style={{ background: "var(--color-bg)" }}>

    <div className="max-w-6xl mx-auto mb-10">
    <Reveal>
        <h2 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
        Habilidades
        </h2>
    </Reveal>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {skills.map((skill, i) => {
        const Icon = skill.icon;
        const tag = nivelVar[skill.nivel];
        return (
        <Reveal key={i} delay={i * 0.05}>
            <div
            className="p-5 rounded-xl text-center flex flex-col items-center gap-3 transition-all duration-300 cursor-default"
            style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.border = "1px solid var(--color-primary)";
                e.currentTarget.style.boxShadow = "var(--color-glow)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.border = "1px solid var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
            }}
            >
            <Icon size={36} color={skill.cor} />

            <p className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>
                {skill.tech}
            </p>

            <span
                className={nivelStyle[skill.nivel]}
                style={{
                color: tag.color,
                borderColor: tag.border,
                background: tag.bg,
                }}
            >
                {skill.nivel}
            </span>
            </div>
        </Reveal>
        );
    })}
    </div>

</section>
);
}