import { useState } from "react";
import { Reveal } from "../Reveal/index";

export default function Contato() {
const [status, setStatus] = useState("idle");

const handleSubmit = (e) => {
e.preventDefault();
setStatus("loading");

setTimeout(() => setStatus("success"), 1200);
};

return (
<section
    id="Contato"
    className="scroll-mt-24 bg-(--color-bg) px-6 py-20"
>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

    {/* LADO ESQUERDO */}
    <Reveal>
        <div className="space-y-4">

        <h2 className="text-4xl font-bold text-(--color-text)">
            Vamos trabalhar juntos
        </h2>

        <p className="text-(--color-text-muted)">
            Aberto para projetos, freelas ou oportunidades na área de desenvolvimento.
        </p>

        {/* STATUS VISUAL */}
        {status === "success" && (
            <p className="text-green-400 text-sm">
            Mensagem enviada com sucesso ✔
            </p>
        )}

        </div>
    </Reveal>

    {/* FORMULÁRIO */}
    <Reveal delay={0.1}>
        <form
        onSubmit={handleSubmit}
        className="bg-(--color-surface) p-6 rounded-2xl border border-(--color-border) space-y-4"
        >

        {/* NOME */}
        <div className="space-y-1">
            <label className="text-xs text-(--color-text-muted)">
            Nome
            </label>
            <input
            className="w-full p-3 bg-(--color-bg) border border-(--color-border) rounded-md text-(--color-text) outline-none focus:border-(--color-primary)"
            placeholder="Seu nome"
            />
        </div>

        {/* EMAIL */}
        <div className="space-y-1">
            <label className="text-xs text-(--color-text-muted)">
            Email
            </label>
            <input
            className="w-full p-3 bg-(--color-bg) border border-(--color-border) rounded-md text-(--color-text) outline-none focus:border-(--color-primary)"
            placeholder="seuemail@email.com"
            />
        </div>

        {/* MENSAGEM */}
        <div className="space-y-1">
            <label className="text-xs text-(--color-text-muted)">
            Mensagem
            </label>
            <textarea
            rows="5"
            className="w-full p-3 bg-(--color-bg) border border-(--color-border) rounded-md text-(--color-text) outline-none focus:border-(--color-primary)"
            placeholder="Me conte sobre seu projeto..."
            />
        </div>

        {/* BOTÃO */}
        <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-(--color-primary) text-black py-3 rounded-md font-medium hover:opacity-90 transition disabled:opacity-50"
        >
            {status === "loading"
            ? "Enviando..."
            : status === "success"
            ? "Enviado ✔"
            : "Enviar mensagem"}
        </button>

        </form>
    </Reveal>

    </div>
</section>
);
}