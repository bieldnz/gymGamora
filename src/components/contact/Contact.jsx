import React from 'react'
import Styles from "../../styles/contact/contact.module.css"
import {BsWhatsapp} from "react-icons/bs"
import {FiMapPin} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai"
import img from "../../../public/img1Contact.jpg"
import Box from "./BoxContact.jsx"

const Contact = () => {

    const border = {
        borderRight: "2px solid #d5283a"
    }

  return (
    <div className={Styles.allContact}>
        <div className={Styles.backgroundContact}>            
            <img className={Styles.backgroundContactInside} src={img}/>
            <button>CONTATE-NOS</button>
        </div>
        <div className={Styles.allBoxContact}>
            <Box svg={<BsWhatsapp/>} border={border} titulo={"WHATSAPP"} texto1={"+55 11 91234-5678"} texto2={"+55 11 98765-4321"}/>
            <Box svg={<FiMapPin/>} border={border} titulo={"ENDEREÇO"} texto1={"R. Augusta, 1585 - Consolação"} texto2={"São Paulo - SP, 01305-100"}/>
            <Box svg={<AiOutlineMail/>} titulo={"E-MAIL"} texto1={"gamora.gym@outlook.com"} texto2={"gamora.gym@gmail.com"}/>
        </div>
    </div>
  )
}

export default Contact