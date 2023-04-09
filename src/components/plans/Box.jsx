import React from 'react'
import Styles from "../../styles/plans/box.module.css"

const Box = ({img, plano, duracao, preco}) => {
  return (
    <section className={Styles.boxPlans}>
    <img src={img} className={Styles.img1Plans} />
    <div className={Styles.textPlans}>
        <h1>Plano: {plano}</h1>
        <p>Duração: {duracao}</p>
        <p>Preço: {preco}R$</p>
        <button>Assinar Plano</button>
    </div>
</section>
  )
}

export default Box