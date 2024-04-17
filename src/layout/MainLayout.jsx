/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/pos.css";

function MainLayout({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <button>
                <b>Home</b>
              </button>
            </Link>
            <div className="container">
              <Link to="/pos" className="navbar-brand">
                <button>
                  <b>POS System</b>
                </button>
              </Link>
            </div>
            <div className="container">
              <Link to="/itemList" className="navbar-brand">
                <button>
                  <b>Item List</b>
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <main>
          <div className="container mt-3">
           
            {children}
          </div>
          <ToastContainer />
        </main>
      </header>
    </div>
  );
}

export default MainLayout;
