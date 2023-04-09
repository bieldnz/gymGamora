import React from 'react'
import Styles from "../../styles/plans/plans.module.css"
import Box from "./Box"
import img1 from "../../../public/img1Plans.jpg"
import img2 from "../../../public/img2Plans.jpg"
import img3 from "../../../public/img3Plans.jpg"
import imgBackground from "../../../public/backgroundPlans.png"

const Plans = (props, ref) => {
    return (
        <main className={Styles.allPlans}>
            <h1 ref={ref}>Planos</h1>
            <div className={Styles.imgBackground}><img src={imgBackground}></img></div>
            <div><Box img={img1} plano={"Básico"} duracao={"1 mês"} preco={100}/></div>
            <div><Box img={img2} plano={"Premium"} duracao={"6 meses"} preco={500}/></div>
            <div><Box img={img3} plano={"Deluxe"} duracao={"1 ano"} preco={800}/></div>
        </main>
    )
}

export default React.forwardRef(Plans)