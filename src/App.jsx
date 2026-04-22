import {Navbar} from "./componentes/Navbar/index"
import {Home} from "./componentes/Home/index"
import {Sobre} from "./componentes/Sobre/index"
import { Projeto } from "./componentes/Projeto"
import { Habilidade } from "./componentes/Habilidades"
import { Jornada } from "./componentes/Jornada"
import { Certificado } from "./componentes/Certificados"
import Contato from "./componentes/Contatos"

function App() {


  return (
    <>
    <Navbar />
    <Home />
    <Sobre />
    <Projeto />
    <Habilidade />
    <Jornada />
    <Certificado />
    <Contato />
    </>
)
}
export default App
