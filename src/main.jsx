import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { UserAuthProvider } from "./Context/LoginContext.jsx"
import { Provider } from "react-redux"
import store from "./Redux/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthProvider>
        <Provider store={store}>
        <App />
        </Provider>
        
      </UserAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
