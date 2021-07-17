import React from 'react'

import cardStyles from "./style.module.scss"

const Card = () => {
    return(
        <div className={cardStyles.card}>
            <h1>Title Card</h1>
            <h1 className={cardStyles.h1}>Title 2 Card</h1>
            <p>Lorem ipsum dolor sit amet, consect.</p>
            <button>Button</button>
        </div>
    )
}
  
export default Card  