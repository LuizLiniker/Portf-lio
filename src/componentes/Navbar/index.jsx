import { useState } from "react";


export function Navbar(){

    const [aberto, setAberto] = useState(false);


const links = [{id: 1, nome: "Início", href: "#Início"},{id: 2, nome: "Projetos", href: "#Projetos"},{id: 3, nome: "Habilidades", href: "#Habilidades"},{id: 4, nome: "Experiências", href: "#Experiências"},{id: 5, nome: "Contato", href: "#Contato"}
];




return(
        <>
        
        <header className="flex justify-between bg-(--color-neutral) font-(--text-heandline) sticky top-0 px-15 py-5 border-b-2 items-center">
            <h3 className="text-(--color-primary) text-xl">Luiz Liniker</h3>
            <nav className="hidden md:flex">
            <ul className="flex gap-10 text-gray-500">
                {links.map(link => (
                    <li key={link.id}><a href={link.href} className="hover:text-(--color-primary) hover:underline">{link.nome}</a></li>
                ))}
            </ul>

            </nav>

            {/*MENU HAMBURGUER*/}
            
            <div className="relative flex md:hidden">
                <button onClick={() => setAberto(!aberto)} className="bg-(--color-primary) p-2 rounded-md">
                    ☰
                </button>
                
                <div  className={`absolute top-full right-0 font-(--text-heandline) transition-all duration-200 ease-out ${aberto? "opacity-100 translate-y-1": "opacity-0 translate-y-4"}`}>
                    <ul className="text-gray-500 p-5 bg-(--color-neutral) flex flex-col space-y-5">
                        {links.map(link => (
                                <li key={link.id}><a  onClick={() => setAberto(false)} href={link.href} className="hover:text-(--color-primary) hover:underline">{link.nome}</a></li>
                        ))}
                        <li className="bg-(--color-primary) rounded-md px-2 py-3 text-black"><a href="" download >Baixar CV</a></li>
                    </ul>
                </div>
            </div>

            <a href="" download className="bg-(--color-primary) rounded-md px-3 py-1 hidden md:block">Baixar CV</a>

        </header>

        </>
    )
}

export default Navbar