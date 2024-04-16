// Items.jsx

import React, { useState } from "react"

const Items = ({ item, handleDeleteItem, handleEditItem }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedItem, setUpdatedItem] = useState({
    Name: item.Name,
    Detail: item.Detail,
    Quantity: item.Quantity,
    UnitPrice: item.UnitPrice,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUpdatedItem({
      ...updatedItem,
      [name]: value,
    })
  }

  const handleUpdateItem = () => {
    handleEditItem(item.id, updatedItem)
    setIsEditing(false) // Hide the update form after updating
  }

  return (
    <>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="grid grid-cols-5 gap-4">
          {/* Display item details */}
          <div>
            <p className="font-semibold">Item Number:</p>
            <p>{item.itemNumber}</p>
          </div>
          <div>
            <p className="font-semibold">Name:</p>
            <p>{item.Name}</p>
          </div>
          
          <div>
            <p className="font-semibold">Quantity:</p>
            <p>{item.Quantity}</p>
          </div>
          <div>
            <p className="font-semibold">Price:</p>
            <p>{item.Price}</p>
          </div>
          <div>
            {/* Delete Button */}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete Item
            </button>
            {/* Update Button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={() => setIsEditing(true)}
            >
              Update Item
            </button>
          </div>
        </div>
      </div>
      {/* Update Form */}
      {isEditing && (
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={updatedItem.Name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 mb-2"
            />
            <input
              type="text"
              placeholder="Detail"
              name="Detail"
              value={updatedItem.Detail}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 mb-2"
            />
            <input
              type="number"
              placeholder="Quantity"
              name="Quantity"
              value={updatedItem.Quantity}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 mb-2"
            />
            <input
              type="number"
              placeholder="Unit Price"
              name="UnitPrice"
              value={updatedItem.UnitPrice}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 mb-2"
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUpdateItem}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Items
