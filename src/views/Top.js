import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";

import logo from "../assets/logo.png";

const Top = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  
  return (
    <div>
      {!isAuthenticated && (
        <Button
          id="qsLoginBtn"
          color="secondary"
          className="loginbutton"
          onClick={() => loginWithRedirect()}
        >
          Log in
        </Button>
      )}
      <div className="text-center menu my-5">
        <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
        <h1 className="mb-4">ADMINISTRATION SITE</h1>
      </div>
    </div>
  );
  
}

export default Top;
