import React from 'react'
import Styles from "../../styles/sobre/boxSobre.module.css"

const BoxSobre = ({svg, title}) => {
  return (
    <div className={Styles.boxSobre}>
        <div className={Styles.boxSobreInside}>
            {svg}
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius a tempore eaque dolore dignissimos numquam delectus maxime natus sit repellat, similique rerum rem quaerat atque quas adipisci ducimus voluptatum!</p>
        </div>
    </div>
  )
}

export default BoxSobre