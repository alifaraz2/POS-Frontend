import React from "react"
import AddToCart from "../Redux/CartAction"
import { useDispatch } from "react-redux"
import "../styles/itemList.css"

const ItemsList = ({ item }) => {
  const dispatch = useDispatch // Initializing useDispatch hook

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    dispatch(AddToCart(item)) // Dispatching addToCart action with the item
  }
  return (
    <>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="grid grid-cols-5 gap-4">
        <div>
            <p className="font-semibold">Item Number</p>
            <p>{item.itemNumber}</p>
          </div>
          <div>
            <p className="font-semibold">Name</p>
            <p>{item.Name}</p>
          </div>
        
          <div>
            <p className="font-semibold">Quantity</p>
            <p>{item.Quantity}</p>
          </div>
          <div>
            <p className="font-semibold">Price</p>
            <p>{item.Price}</p>
          </div>

         
        </div>
      </div>
    </>
  )
}

export default ItemsList
