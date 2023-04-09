import React from 'react'
import Styles from "../../styles/sobre/sobre.module.css"
import Box from "./BoxSobre.jsx"
import {useState} from "react"
import {CgGym} from "react-icons/cg"
import {GiGymBag} from "react-icons/gi"
import {FaBuilding} from "react-icons/fa"

const Sobre = (props, ref) => {

  const fazemos = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus nam unde impedit praesentium ad eligendi debitis sit exercitationem distinctio. Optio, placeat quidem. Blanditiis reiciendis eveniet accusantium eaque, natus iure?</p>;
  const visao = <div><p>Bem-vindo à nossa academia! Aqui, nossa visão é ajudá-lo a alcançar seus objetivos de saúde e fitness, não importa o quão grande ou pequeno eles sejam.</p><p>Nós acreditamos que um estilo de vida saudável é algo que pode ser alcançado por todos, independentemente da idade, do sexo ou do nível de condicionamento físico. É por isso que oferecemos uma ampla variedade de opções de treinamento e exercícios, para que você possa encontrar algo que se adapte às suas necessidades e interesses.</p></div>;
  const valores = <p>Nós acreditamos que um estilo de vida saudável é algo que pode ser alcançado por todos, independentemente da idade, do sexo ou do nível de condicionamento físico. É por isso que oferecemos uma ampla variedade de opções de treinamento e exercícios, para que você possa encontrar algo que se adapte às suas necessidades e interesses.</p>

  const [sobre, setSobre] = useState(fazemos)

  return (
    <main className={Styles.allSobre}>
        <h1 ref={ref}>Sobre nós</h1>
        <div className={Styles.allValoresSobre}>
            <div className={Styles.skillsSobre}>
                <button onClick={() => setSobre(fazemos)}>O QUE FAZEMOS</button>
                <button onClick={() => setSobre(visao)}>NOSSA VISÃO</button>
                <button onClick={() => setSobre(valores)}>NOSSOS VALORES</button>
            </div>
            {sobre}
            <div className={Styles.allBoxSobre}>
              <Box svg={<CgGym/>} title={"EQUIPAMENTOS"} />
              <Box svg={<GiGymBag/>} title={"PERSONAIS"}/>
              <Box svg={<FaBuilding/>} title={"INFRAESTRUTURA"}/>
              
            </div>
        </div>
    </main>
  )
}

export default React.forwardRef(Sobre)