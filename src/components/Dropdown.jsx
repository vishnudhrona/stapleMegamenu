import React from "react";
import "./Dropdown.css"
import { useState } from "react";
import Megamenu from "./Megamenu";
import { CSSTransition } from "react-transition-group";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = () => {

    const [megamenuVisible, setmegamenuVisible] = useState(false);

  const toggleDropdown = () => {
    setmegamenuVisible(!megamenuVisible);
  };

  return (
    <div className="fleex">
      <div className={megamenuVisible === false ?'dropdown':'dropdown1'}>
        {/* Dropdown menu */}
        <ul className="">
          <li>
            <span className="list" 
            onClick={toggleDropdown}
            >
              School Supplies
              <AiFillCaretDown />
            </span>
          </li>
          <li>
            <p className="list">Link & Toner</p>
          </li>
          <li>
            <p className="list">Shop By Brand</p>
          </li>
          <li>
            <p className="list">Office Supplies</p>
          </li>
          <li>
            <p className="list">Papper</p>
          </li>
          <li>
            <p className="list">Computers & Accessories</p>
          </li>
          <li>
            <p className="list">Printers & Scanners</p>
          </li>
          <li>
            <p className="list">Electronics</p>
          </li>
          <li>
            <p className="list">Furniture</p>
          </li>
          <li>
            <p className="list">Food & Breakroom</p>
          </li>
          <li>
            <p className="list">Cleaning Supplies</p>
          </li>
          <li>
            <p className="list">Cleaning Supplies</p>
          </li>
          <li>
            <p className="list">Cleaning Supplies</p>
          </li>
          <li>
            <p className="list">Cleaning Supplies</p>
          </li>
          <li>
            <p className="list">Cleaning Supplies</p>
          </li>
          <li>
            <p className="list">Cleaning Supplies</p>
          </li>
          <li>
            <p className="list">Cleaning Supplies</p>
          </li>
        </ul>
      </div>

      <div>{megamenuVisible && <Megamenu />}</div>
    </div>
  );
};

export default Dropdown;
