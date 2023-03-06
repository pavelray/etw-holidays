import { LOGO_BLACK, MENUS } from "@/utils/constants";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import React, { Fragment } from "react";
import { style } from "./Navbar.style";

const NavbarMenu = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const getActiveMenuClassName = (menu) => {
    if (menu.text === "Home")
      return currentRoute === menu.link ? "menu-item active" : "menu-item";
    return currentRoute.includes(menu.link) ? "menu-item active" : "menu-item";
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo-container">
          <span className="logo">
            <Image src={LOGO_BLACK} alt="Home_Logo" width={50} height={50} />
          </span>
          <span>ETW Holidays</span>
        </div>
        <ul>
          {MENUS.map((menu, i) => (
            <li key={i} className={getActiveMenuClassName(menu)}>
              <Link href={menu.link}>{menu.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default NavbarMenu;
