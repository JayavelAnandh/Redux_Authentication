import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../cssFiles/SignUp.css";
import { signup } from "../features/user";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  let userDetails = { name, email, password, userSignedIn: true };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let userState = useSelector((state) => state.user.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signup(userDetails));
    navigate("/logIn");
    console.log(userState);
    swal("SuccessFully Signed In", "", "success");
  };

  return (
    <div className="container-fluid signupPage">
      <div className="card col-lg-6 col-md-10 col-sm-12">
        <h1>Sign-Up</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label htmlFor="gmail">Gmail</label>
          <input
            type="email"
            id="gmail"
            name="gmail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />

          <div>
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: "90%" }}
            />
            <button
              type="button"
              className="btn btn-outline-success"
              style={{
                width: "8%",
                height: "40px",
                marginLeft: "1%",
                padding: "2px",
              }}
              onClick={() => setShow(!show)}
            >
              {show ? (
                <i className="fa-sharp fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </button>
          </div>
          <br />

          <div className="buttonAlign">
            <button
              type="submit"
              onClick={(event) => handleSubmit(event)}
              className="buttons"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
