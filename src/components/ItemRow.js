import React from 'react'
import './css/ItemRow.css'

function ItemRow(props) {
  return (
    <div className="item-row">
      {props.children}
    </div>
  )
}

export default ItemRow
