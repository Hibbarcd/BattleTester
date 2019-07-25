import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
    <div className='image'>
    <img alt="monster" src={`${props.monster.image}`}></img>
    </div>
            <p>{props.monster.HP}HP</p>
            <p>{props.monster.MP}MP</p>
            <p>{props.monster.AP}AP</p>
            <p>{props.monster.DP}DP</p>
    </div>
)