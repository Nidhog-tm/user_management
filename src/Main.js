import React from "react";

import Footer from "./Footer.js";
import Header from "./Header.js";

export default class Main extends React.Component {
  render() {
    return (
        <div>
        <Header/>
            <div className="main">
                <h2>メニュー</h2>
            </div>
        <Footer/>
        </div>
    );
  }
}