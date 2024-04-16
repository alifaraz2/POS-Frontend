import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/homePage"
import Register from "../Pages/RegisterPage"
import Login from "../Pages/LoginPage"
import AdminPage from "../Pages/AdminPage"
import CartPage from "../Pages/CartPage"
import ItemPage from "../Pages/ItemPage"
import PrivateRoutes from "./PrivateRoutes"
import Header from "../component/Header"

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <HomePage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/Register"
          element={
            <PrivateRoutes>
              <Register />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/AdminPage"
          element={
            <PrivateRoutes>
              <AdminPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/CartPage"
          element={
            <PrivateRoutes>
              <CartPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/ItemPage"
          element={
            <PrivateRoutes>
              <ItemPage />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </>
  )
}
export default AppRoutes
