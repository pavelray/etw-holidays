import { LOGO_BLACK, MENUS } from "@/utils/constants";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import React, { Fragment } from "react";
import { style } from "./Navbar.style";

const NavbarMenu = ({ isMobile }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const getActiveMenuClassName = (menu) => {
    if (menu.text === "Home")
      return currentRoute === menu.link ? "menu-item active" : "menu-item";
    return currentRoute.includes(menu.link) ? "menu-item active" : "menu-item";
  };

  const handleMobileMenu = () => {
    const mobileMenu = document.querySelectorAll(".mobile");
    mobileMenu[0].classList.toggle("menu-open");
  };

  const mobileMenuClick = () => {
    const mobileMenu = document.querySelectorAll(".mobile");
    mobileMenu[0].classList.toggle("menu-open");
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo">
            <Image
              src={LOGO_BLACK}
              alt="Home_Logo"
              width={isMobile ? 135 : 211}
              height={isMobile ? 40 : 58}
            />
          </div>
          {/* <span>ETW Holidays</span> */}
        </div>
        <ul>
          {MENUS.map((menu, i) => (
            <li key={i} className={getActiveMenuClassName(menu)}>
              <Link href={menu.link}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        <button className="hamburger-icon" onClick={handleMobileMenu}>
          <Image
            src="/images/icons/menu.png"
            alt=""
            width={35}
            height={35}
            title="Show Menu"
          />
        </button>
      </nav>
      <div className="mobile">
        <div className="mobile-menu">
          <ul className="menu">
            {MENUS.map((menu, i) => (
              <li key={i} className="menu-item" onClick={mobileMenuClick}>
                <Link href={menu.link}>{menu.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default NavbarMenu;
