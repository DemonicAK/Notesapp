import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const host = "http://localhost:5000";
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    // console.log(credentials)
  };
  const HandleClick = (e) => {
    e.preventDefault();
    CreateUser();
    console.log(credentials);
  };

  const CreateUser = async () => {
    //  TODO:MAKE API CALLS
    const url = `${host}/api/auth/createuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();

    // const result = await response.json();
    console.log(result);

    if (result.TaskSuccess) {
      //save in local storage
      localStorage.setItem("token", result.token);

      //redirect
      navigate("/");
    } else {
      alert("u r invalid");
    }

    console.log(result);
    // setnotes(result);
  };

  return (
    <>
      <div className="container my-4">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              your name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              onChange={HandleChange}
              minLength={3}
              required
            />
          </div>
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
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
              minLength={5}
              required
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={HandleClick}
            disabled={
              credentials.name.length < 3 || credentials.password.length < 5
            }
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

// export default Login;

export default Signup;
