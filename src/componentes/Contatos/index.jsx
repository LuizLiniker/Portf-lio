import React from "react";

export default function Contato() {
return (
<section className="min-h-screen bg-(--color-secondary) text-white flex items-center justify-center px-6">
    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

    {/* Lado Esquerdo */}
    <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Vamos construir algo <span className="text-(--color-primary)">extraordinário</span> juntos.
        </h1>

        <p className="text-gray-400 max-w-md">
        Seja para um projeto específico ou apenas para conversar sobre tecnologia, minha caixa de entrada está sempre aberta.
        </p>

        <div className="space-y-4">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-(--color-neutral) flex items-center justify-center">
            📧
            </div>
            <div>
            <p className="text-sm text-gray-400">EMAIL</p>
            <p className="text-white">linikerluiz32@gmail.com</p>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-(--color-neutral) flex items-center justify-center">
            📍
            </div>
            <div>
            <p className="text-sm text-gray-400">LOCALIZAÇÃO</p>
            <p className="text-white">Monsenhor Paulo <span className="text-(--color-primary)">MG</span> (Remoto)</p>
            </div>
        </div>
        </div>
    </div>

    {/* Lado Direito */}
    <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-gray-800">
        <form className="space-y-5">

        <div className="grid md:grid-cols-2 gap-4">
            <div>
            <label className="text-sm text-gray-400">NOME COMPLETO</label>
            <input
                type="text"
                placeholder="Seu nome"
                className="w-full mt-1 p-3 bg-[#020617] border border-gray-700 rounded-lg outline-none focus:border-blue-500"
            />
            </div>

            <div>
            <label className="text-sm text-gray-400">EMAIL</label>
            <input
                type="email"
                placeholder="seuemail@email.com"
                className="w-full mt-1 p-3 bg-[#020617] border border-gray-700 rounded-lg outline-none focus:border-blue-500"
            />
            </div>
        </div>

        <div>
            <label className="text-sm text-gray-400">MENSAGEM</label>
            <textarea
            rows="5"
            placeholder="Me conte sobre seu projeto..."
            className="w-full mt-1 p-3 bg-[#020617] border border-gray-700 rounded-lg outline-none focus:border-blue-500"
            />
        </div>

        <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium"
        >
            Enviar Mensagem
        </button>
        </form>
    </div>
    </div>
</section>
);
}
