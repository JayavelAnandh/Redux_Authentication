import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../cssFiles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  let userDetails = useSelector((state) => state.user.value);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userDetails.email == email && userDetails.password == password) {
      navigate("/homePage");
      swal("Logged-In Successfully", "", "success");
    } else {
      swal({
        title: "User Not Recognized",
        icon: "warning",
        dangerMode: "true",
      });
    }
  };

  return (
    <div className="container-fluid loginPage">
      <div className="card col-lg-6 col-md-10 col-sm-12">
        <h1>Log-In</h1>
        <form>
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
              Log-In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
