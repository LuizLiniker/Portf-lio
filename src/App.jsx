import { useEffect, useState } from "react";

import { Navbar } from "./componentes/Navbar/index";
import { Home } from "./componentes/Home/index";
import { Sobre } from "./componentes/Sobre/index";
import { Projeto } from "./componentes/Projeto";
import { Habilidade } from "./componentes/Habilidades";
import { Jornada } from "./componentes/Jornada";
import { Certificado } from "./componentes/Certificados";
import Contato from "./componentes/Contatos";

/* TEMA GLOBAL */
function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return { dark, toggleTheme };
}

function App() {
  const theme = useTheme();

  return (
    <>
      <Navbar {...theme} />

      <main>
        <Home />
        <Sobre />
        <Projeto />
        <Habilidade />
        <Jornada />
        <Certificado />
        <Contato />
      </main>
    </>
  );
}

export default App;