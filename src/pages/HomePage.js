import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../cssFiles/HomePage.css";
import { logout } from "../features/user";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let userDetails = useSelector((state) => state.user.value);
  console.log(userDetails);
  if (userDetails.userSignedIn == false) {
    swal({
      title: "User Details is Unvailable",
      text: "Try Signing-In",
      icon: "warning",
      dangerMode: "true",
    });
  } else {
    console.log(userDetails);
  }

  const handleLogOut = () => {
    // dispatch(() => logout());
    navigate("/");
    swal("Logged out");
  };
  return (
    <div className="container-fluid homepage">
      <div className="logOutHolder">
        <button className="btn btn-danger" onClick={() => handleLogOut()}>
          LogOut{" "}
          <i
            class="fa-solid fa-right-from-bracket"
            style={{ marginLeft: "3px" }}
          ></i>
        </button>
      </div>
      <div className="main">
        <div className="col-lg-8 tableHolder">
          <table>
            <tbody>
              <tr>
                <th style={{ width: "30%" }}>Name</th>
                <th style={{ width: "40%" }}>Email</th>
                <th style={{ width: "30%" }}>Password</th>
              </tr>
              <tr>
                <td>{userDetails.name}</td>
                <td>{userDetails.email}</td>
                <td>{userDetails.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
