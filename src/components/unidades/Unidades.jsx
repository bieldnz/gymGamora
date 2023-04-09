import React from 'react'
import Styles from "../../styles/unidades/unidades.module.css"
import BoxUnidades from "./BoxUnidades"

import img1 from "../../../public/img1Unidades.jpg"
import img2 from "../../../public/img2Unidades.jpg"
import img3 from "../../../public/img3Unidades.jpg"
import img4 from "../../../public/img4Unidades.jpg"

const Unidades = (props, ref) => {

  const endereco1 = "https://www.google.com/maps/place/R.+Augusta,+1585+-+Consola%C3%A7%C3%A3o,+S%C3%A3o+Paulo+-+SP,+01305-100/@-23.5574148,-46.6590596,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59cd256981b3:0x7d986eec3b77117c!8m2!3d-23.5574148!4d-46.6590596!16s%2Fg%2F11b8v8478j";
  const endereco2 = "https://www.google.com/maps/place/R.+Tom%C3%A9+%C3%81lvares+de+Castro,+80+-+Vila+Carmosina,+S%C3%A3o+Paulo+-+SP,+08290-270/@-23.5572798,-46.4464774,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce668707dd7ec9:0x854766a18674ca30!8m2!3d-23.5572798!4d-46.4464774!16s%2Fg%2F11cpmzg7hm";
  const endereco3 = "https://www.google.com/maps/place/R.+Barros+Cassal,+210+-+Itaquera,+S%C3%A3o+Paulo+-+SP,+08210-180/@-23.5403662,-46.4549468,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce66be8b556469:0xfa2e01a9a2ce3b92!8m2!3d-23.5403662!4d-46.4549468!16s%2Fg%2F11cph96czh"
  const endereco4 = "https://www.google.com/maps/place/R.+Flantenor+de+Lima+Paiva,+3+-+Lajeado,+S%C3%A3o+Paulo+-+SP,+08450-070/@-23.5418871,-46.4091477,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce64522329c72f:0x470357d55ee11440!8m2!3d-23.5418871!4d-46.4091477!16s%2Fg%2F11c29_0twz"
  return (
    <section className={Styles.allUnidades}>
      <h1 ref={ref}>UNIDADES</h1>
      <div className={Styles.allBoxUnidades}>
        <BoxUnidades img={img1} texto="Rua Augusta, 1585" endereco=""/>
        <BoxUnidades img={img2} texto="R. Tomé Álvares de Castro, 80" endereco={endereco2}/>
        <BoxUnidades img={img3} texto=" R. Barros Cassal, 210" endereco={endereco3}/>
        <BoxUnidades img={img4} texto="R. Flantenor de Lima Paiva, 3" endereco={endereco4}/>
      </div>
    </section>
  )
}

export default React.forwardRef(Unidades)