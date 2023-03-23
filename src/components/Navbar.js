import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let location = useLocation();
  const navigate = useNavigate();
  const HandleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/Login");
    window.location.reload();
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            GammaNotes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : " "
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : " "
                  }`}
                  to="/about"
                >
                  about us
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div>
                <Link
                  className="btn btn-primary mx-1"
                  to="/Login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/Signup"
                  role="button"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <Link
                className="btn btn-primary mx-1"
                onClick={HandleSignOut}
                role="button"
              >
                Sign Out
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
