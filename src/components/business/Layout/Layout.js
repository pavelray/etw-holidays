import NavbarMenu from "@/components/ui/Navbar/Navbar";
import React, { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavbarMenu />
      {children}
      <footer>
        <div className="container pt-5 mt-5">
          <hr />
          <div className="d-flex flex-column justify-content-center align-items-center py-3">
            <p className="pt-2">
              Copyright © 2023 Explore The World Holidays - All Rights Reserved.
            </p>
            <hr width="10%" />
            <p className="pt-0">Developed by #Ray</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Layout;