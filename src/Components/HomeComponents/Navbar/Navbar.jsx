import React, {useState} from "react";
import "./navbar.css";
import {Link} from 'react-router-dom'
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () => {
    setActive('navBar closeNavbar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <SiYourtraveldottv className="icon" /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
        <ul className="navLists flex">
          <li className="navItem">
            <a href="#" className="navLink">Home</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">Package</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">Shop</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">About</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">pages</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">News</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">Contact</a>
          </li>

          <button className="btn">
            <a><Link to='/login'>Login</Link></a>
          </button>
          <button className="btn">
            <a><Link to='/signup'>Signup</Link></a>
          </button>

        </ul>
        <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>

      </header>
    </section>
  );
};

export default Navbar;
