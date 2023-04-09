import React from 'react'
import Styles from "../../styles/unidades/boxUnidades.module.css"

const BoxUnidades = ({img, texto, endereco}) => {
  return (
    <section className={Styles.boxUnidades}>
        <div className={Styles.boxInsideUnidades}>
            <div className={Styles.unidadesImg}>
                <img src={img}/>
                <span>{texto}</span>
                <a href={endereco}>Ver Localização ↦</a>
            </div>
        </div>
    </section>
  )
}

export default BoxUnidades