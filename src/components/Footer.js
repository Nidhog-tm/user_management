import React from "react";

import logo from "../assets/logo_m.png";

const Footer = () => (
  <footer className="bg-info p-3 text-center">
    <div>
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="50" />
    </div>
    <p>
    since 2020-09 M-Team.INC
    </p>
  </footer>
);

export default Footer;
