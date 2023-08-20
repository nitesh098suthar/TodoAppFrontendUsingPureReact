import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="headerx">
        <ol>
          <li>
            <Link to={"/"} >Home</Link>
          </li>
          <li>
            <Link to={"/task"}>Task</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Header;
