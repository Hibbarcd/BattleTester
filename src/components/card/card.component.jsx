import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
    <img alt="monster" src={`${props.monster.image}`}></img>
        <h2>{props.monster.name }</h2>
        <p>{props.monster.HP}</p>
        <p>{props.monster.MP}</p>
        <p>{props.monster.AP}</p>
        <p>{props.monster.DP}</p>
        <p>{props.monster.DP}</p>

    </div>
)