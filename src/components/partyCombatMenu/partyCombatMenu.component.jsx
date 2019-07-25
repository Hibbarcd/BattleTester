import React from 'react';
// import store from '../../config/store'
// import { connect } from 'react-redux'
import './partyCombatMenu.style.scss'

function PartyCombatMenu(props)  {
  return (         
    <div className='menu-container'>
      <table className="commandsMenu">
        <tbody id='commands'>
        <tr id="fight">
          <td>FIGHT</td>
        </tr>
        <tr id="spell">            
          <td>SPELL</td>
        </tr>
        <tr id="run">
          <td>RUN</td>
        </tr>
        <tr id="item">
          <td>ITEM</td>
        </tr>               
      </tbody>
    </table> 
    </div>
    )
}
export default PartyCombatMenu