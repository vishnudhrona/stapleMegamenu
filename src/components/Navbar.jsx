import React from "react";
import "./Navbar.css";
import { ImMenu } from 'react-icons/im';
import Dropdown from "./Dropdown";
import { useState } from "react";
import Megamenu from "./Megamenu";
import { AiFillCaretDown } from "react-icons/ai";


const Navbar = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="Navbar">
      <header className="header">
        <img
          className="stapleimg"
          src="https://assets.staples-static.com/sbd/cre/products/200405/dg23195/images/dg23195_flyout_logo_133x24.svg"
          alt="staples logo"
        />
        <ul>
          <div className="lists">
            <li className="list">
              <button onClick={toggleDropdown} href="/#">
                Shop
                <AiFillCaretDown />

              </button>
            </li>
            <li className="list">
              <button href="/#">Deals</button>
            </li>
            <li className="list">
              <button href="/#">Services</button>
            </li>
          </div>
          <span onClick={toggleDropdown}>
            <ImMenu />
          </span>
        </ul>
        {/* <div className="search-bar-container">
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div> */}
      </header>
      <div className="menu-devider" style={{}}>
      <div>{dropdownVisible && <Dropdown />}</div>
      <div>
        {/* <Megamenu /> */}
    </div>
      </div>
      
    </div>
  );
};

export default Navbar;
