import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [credential, setcredential] = useState({
    name: "",
    email: "",
    password: "",
  });
  let history = useHistory();
  const onSignup = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
    console.log(credential);
  };

  const { name, email, password } = credential;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const json = await response.json();
    //console.log(json);

    //save authtoken and redirect
    localStorage.setItem("token", json.AuthToken);
    const ll = localStorage.getItem("token");
    console.log(ll);
    history.push("/");
  };
  return (
    <div>
      <h2 className="my-5  text-center shadow-lg p-3 rounded-pill">SIGNUP</h2>
      <div className="container my-5 shadow-lg rounded ">
        <form className="my-5 mx-3 " onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1 " className="form-label p-3">
              <h3>Name</h3>
            </label>
            <input
              type="text"
              className="form-control p-3 shadow-lg rounded-pill"
              id="name"
              aria-describedby="emailHelp"
              value={credential.name}
              name="name"
              onChange={onSignup}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1 " className="form-label p-3">
              <h3>Email</h3>
            </label>
            <input
              type="email"
              className="form-control p-3 shadow-lg rounded-pill"
              id="email"
              aria-describedby="emailHelp"
              value={credential.email}
              name="email"
              onChange={onSignup}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1" className="form-label p-3">
              <h3> Password</h3>
            </label>
            <input
              type="password"
              className="form-control p-3 rounded-pill shadow-lg"
              id="password"
              value={credential.password}
              name="password"
              onChange={onSignup}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1" className="form-label p-3">
              <h3> Confirm Password</h3>
            </label>
            <input
              type="password"
              className="form-control p-3 rounded-pill shadow-lg"
              id="cpassword"
              value={credential.cpassword}
              name="cpassword"
              onChange={onSignup}
              minLength={5}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary px-5  my-5 shadow-lg"
          >
            <h4>SIGNUP</h4>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
