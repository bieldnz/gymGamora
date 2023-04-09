import React from 'react'
import Styles from "../styles/header.module.css"
import img from "../../public/img1Header.png"
import { forwardRef } from 'react'

const Header = (props, ref) => {
  return (
    <main className={Styles.allHeader} ref={ref}>
      <section className={Styles.esqHeader}>
        <div className={Styles.textContainer}>
          <h1 className={Styles.tittleHeader}>Aqui seu treino faz sentido</h1>
          <p className={Styles.textHeader}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos laboriosam libero recusandae. Vitae rerum quo consequatur tempora magni quos, nobis aliquid hic unde enim earum delectus numquam ipsam repellendus!</p>
        </div>
        <div className={Styles.containerButtonsHeader}>
          <button className={Styles.redButtonHeader}>FAÇA SUA MATRICULA</button>
          <button className={Styles.whiteButtonHeader}>PORQUE TREINAR CONOSCO ?</button>
        </div>
        <div className={Styles.containerMotivation}>
          <div className={Styles.motivation}>FOCO</div>
          <div className={Styles.motivation}>FÉ</div>
          <div className={Styles.motivation}>DEDICAÇÃO</div>
        </div>
      </section>
      <div className={Styles.dirHeader}>
        <img src={img} className={Styles.imgHeader}/>
      </div>
    </main>
  )
}

export default React.forwardRef(Header)