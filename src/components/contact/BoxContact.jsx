import React from 'react'
import Styles from "../../styles/contact/boxContact.module.css"

const BoxContact = ({border, svg, titulo, texto1, texto2}) => {
  return (
    <div className={Styles.boxContact} style={border}>
        {svg}
        <h3>{titulo}</h3>
        <p>{texto1}</p>
        <p>{texto2}</p>
    </div>
  )
}

export default BoxContact