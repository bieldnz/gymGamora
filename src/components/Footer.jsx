import React from 'react'
import Styles from "../styles/footer.module.css"
import Brand from "../../public/brand.png"

const Footer = () => {
  return (
    <footer className={Styles.allFooter}>
        <img src={Brand} width="200px" height="200px"/>
        <div className={Styles.redesSociais}>
            <a href="https://www.instagram.com/">INSTAGRAM</a>
            <a href="https://twitter.com/   ">TWITTER</a>
            <a href="https://br.pinterest.com/">PINTEREST</a>
            <a href="https://www.facebook.com/">FACEBOOK</a>
        </div>
        <p>© Todos os Direitos Reservados - Gabriel Diniz</p>
        <p>Design by gabriel.dinizdesouza@hotmail.com</p>
    </footer>
  )
}

export default Footer