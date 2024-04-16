import React, { useState, useEffect } from "react"
import axios from "axios"
import Items from "../component/ItemComponent"

const ItemPage = () => {
  const [showAddItemForm, setShowAddItemForm] = useState(false)
  const [itemsData, setItemsData] = useState([])
  const [newItem, setNewItem] = useState({
    Name: "",
    Detail: "",
    Quantity: 0,
    UnitPrice: 0,
  })
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:5055/getAllItem")
        setItemsData(data)
        console.log("get data", data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllItems()
  }, [])

  const handleEditItem = async (itemId, updatedData) => {
    try {
      await axios.post(
        `http://localhost:5055/updateItem/${itemId}`,
        updatedData
      )

      setItemsData((prevItemsData) => {
        return prevItemsData.map((item) => {
          if (item.id === itemId) {
            return { ...item, ...updatedData }
          }
          return item
        })
      })

      console.log("Item updated:", itemId)
    } catch (error) {
      console.log("Error updating item:", error)
    }
  }

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5055/deleteItem/${itemId}`)
      setItemsData(itemsData.filter((item) => item.id !== itemId))
      console.log("Item deleted:", itemId)
    } catch (error) {
      console.log("Error deleting item:", error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewItem({
      ...newItem,
      [name]: value,
    })
  }

  const handleAddItem = async () => {
    try {
      
      await axios.post(`http://localhost:5055/addItem`, newItem, {
        headers: {
          Authorization: localStorage.getItem("token")
        },
      })

      setNewItem({
        itemNumber: "",
        Name: "",
        Quantity: 0,
        Price: 0,
      })
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.log("Error adding item:", error)
    }
  }

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-8">Item List</h1>

      <div className="mb-8">
        {showAddItemForm ? (
          <div className="flex flex-col md:flex-row md:items-center">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md py-2 px-4 mb-2 md:mr-2 md:mb-0"
              name="Name"
              value={newItem.Name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Detail"
              className="border border-gray-300 rounded-md py-2 px-4 mb-2 md:mr-2 md:mb-0"
              name="Detail"
              value={newItem.Detail}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Quantity"
              className="border border-gray-300 rounded-md py-2 px-4 mb-2 md:mr-2 md:mb-0"
              name="Quantity"
              value={newItem.Quantity}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Unit Price"
              className="border border-gray-300 rounded-md py-2 px-4 mb-2 md:mr-2 md:mb-0"
              name="UnitPrice"
              value={newItem.UnitPrice}
              onChange={handleInputChange}
            />
            {/* Other input fields for details, quantity, and unit price */}
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAddItem}
            >
              Add Item
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              onClick={() => setShowAddItemForm(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          // Add New Item Button
          <div className="flex justify-end mb-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setShowAddItemForm(true)}
            >
              Add New Item
            </button>
          </div>
        )}
      </div>
      {isSuccess && (
        <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mb-4 text-center">
          Item added successfully.
        </div>
      )}
      <div>
        {itemsData.map((item) => (
          <Items
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
          />
        ))}
      </div>
    </>
  )
}

export default ItemPage
