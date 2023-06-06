import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";

// components for different page headers like Messages, Home, Notification

function Header({ text }) {
  const navigate = useNavigate();
  const backtoHome = () => {
    navigate("/");
  };
  return (
    <h4 className="pt-3 ps-0 d-flex justify-content-between">
      <div>
        <button className="btn home_nav" onClick={backtoHome}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>{" "}
        <span>{text}</span>
      </div>
      <div className="testing">
        <button className="btn d-flex align-items-center ">
          {/* {logined ? <i class="fa-regular fa-id-badge fa-xl"></i> : <i class="fa-solid fa-user fa-xl"></i>} */}
          <PermIdentityIcon style={{ width: "50px" }} />
        </button>
      </div>
      {}
    </h4>
  );
}

export default Header;
