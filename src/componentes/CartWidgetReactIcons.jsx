import React, { useContext } from 'react'
import {IoCartSharp} from 'react-icons/io5'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidgetReactIcons = () => {
  const {cartQuantity}= useContext(CartContext)
  return (
    <div>
      <IoCartSharp fontsize={'1.5rem'}/>
      <Badge bg="danger">{cartQuantity()}</Badge>
    </div>
  )
}

export default CartWidgetReactIcons

