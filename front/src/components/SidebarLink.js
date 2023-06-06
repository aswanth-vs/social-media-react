import React from "react";
import "../css/SidebarLink.css";
import { Link } from "react-router-dom";

function SidebarLink({ text, Icon }) {
  let nav_to = text.toLowerCase();

  return (
    <div className="link mt-5">
      <Link to={`/${nav_to}`} className="navigation_link">
        <div className="wrapper">
          <h4>
            {" "}
            <Icon className="fs-2 " />
            <span className="ms-2 ">{text}</span>
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default SidebarLink;
