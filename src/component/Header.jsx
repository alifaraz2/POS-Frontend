import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserAuthContext } from "../Context/LoginContext"

const Header = () => {
  const { email } = useContext(UserAuthContext)
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <NavLink to="/" className="mr-4">
        Home
      </NavLink>
      <NavLink to="/ItemPage" className="mr-4">
        Item List
      </NavLink>
      <NavLink to="/CartPage">
        Cart
      </NavLink>
    </div>
    <p className="mt-4">{email}</p>
  </div>
  )
}

export default Header
