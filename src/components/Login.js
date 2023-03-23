import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const host = "http://localhost:5000";
  // const Navigate = useNavigate();
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const HandleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    // console.log(credentials)
  };
  const HandleClick = (e) => {
    e.preventDefault();
    LoginUser();
    console.log(credentials);
    setcredentials({ email: "", password: "" });
  };

  const LoginUser = async () => {
    //  TODO:MAKE API CALLS
    const url = `${host}/api/auth/loginuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();
    console.log(result);

    if (result.TaskSuccess) {
      //save in local storage
      localStorage.setItem("token", result.token);

      //redirect
      // <Navigate to="/" />
      navigate("/");
    } else {
      alert("u r invalid");
    }

    // setnotes(result);
  };

  return (
    <>
      <div className="container my-4">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={HandleChange}
              value={credentials.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              // type="text"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={HandleChange}
              value={credentials.password}
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={HandleClick}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
