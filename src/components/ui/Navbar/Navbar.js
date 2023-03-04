import Link from "next/link";
import React, { Fragment } from "react";
import { style } from "./Navbar.style";

const NavbarMenu = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo-container">
          <span>ETW Holidays</span>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/service">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default NavbarMenu;
