// pages/Login.js
import React, { useContext } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { UserAuthContext } from "../Context/LoginContext"

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
})

const Login = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(UserAuthContext)
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:5055/Login", values)
      console.log("login successful:", response.data)

      const isadmin = response.data
      const admin = isadmin.data.isAdmin

      console.log("serverDAta", admin)
      const { token } = response.data
      // Save token and isAdmin status to local storage
      localStorage.setItem("token", token)

      setIsLoggedIn(true)
      if (admin) {
        navigate("/AdminPage")
      } else {
        navigate("/")
      }

      alert("User Login successfully!")
    } catch (error) {
      console.error("Error signing up:", error)
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error (invalid credentials)
        alert("Invalid credentials")
      } else {
        // Handle other errors
        alert("An error occurred while logging in. Please try again later.")
      }
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-4 font-bold">Login Form</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <br></br>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Enter a email"
            />
            <ErrorMessage
              className="text-red-500 text-xs italic error-message"
              name="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <br></br>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              className="text-red-500 text-xs italic error-message"
              name="password"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login
