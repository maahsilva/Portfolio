import { Header } from './components/header/header'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <div>
        <p>
          Estudante de Engenharia de Software, formada em Técnico de Desenvolvimento de Sistemas. Com uma 
          sólida base técnica e paixão por aprender e aplicar novas tecnologias, estou motivada a contribuir 
          ativamente em projetos desafiadores, aplicando meus conhecimentos e me desenvolvendo cada vez mais.
        </p>
        <h3>Habilidades</h3>
        <div className="skill level">

        </div>
        <div className="infos">
          <h3>Idiomas</h3>
        </div>
        <div className="languages-info"> 
          <span> 🇧🇷 PT-BR - Nativo</span>
        </div>
        <h3>Educação</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>
            <ul>
              <li>Engenharia de Software| 2023 - 2027 Universidade Uninter</li>
              <li>Téc. Desenvolvimento de Sistemas | 2022 - 2023 ETEC de Taboão da Serra</li>
            </ul>
          </span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
        </div>
        <button>Entre em contato</button>
      </div>
    </main>
  )
}
