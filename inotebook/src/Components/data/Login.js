import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
  const [credential, setcredential] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      //save authtoken and redirect
      localStorage.setItem("token", json.AuthToken);
      history.push("/home");
    } else {
      alert("invalid Details");
    }
  };
  return (
    <div>
      <h2 className="my-5  text-center shadow-lg p-3 rounded-pill">SIGNIN</h2>
      <div className="container my-5 shadow-lg rounded ">
        <form className="my-5 mx-5 " onSubmit={handleSubmit}>
          <div className="mb-3 mx-5">
            <label htmlFor="exampleInputEmail1 " className="form-label p-3">
              <h3>Email address</h3>
            </label>
            <input
              type="email"
              className="form-control p-3 shadow-lg rounded-pill"
              id="email"
              aria-describedby="emailHelp"
              value={credential.email}
              name="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3 mx-5 ">
            <label htmlFor="exampleInputPassword1" className="form-label p-3">
              <h3> Password</h3>
            </label>
            <input
              type="password"
              className="form-control p-3 rounded-pill shadow-lg"
              id="password"
              value={credential.password}
              name="password"
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary px-5  my-3 shadow-lg"
          >
            <h4> SIGNIN</h4>
          </button>
          <div>
            <span>
              Don't Have Account <Link to="/signup">Signup</Link> here
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
