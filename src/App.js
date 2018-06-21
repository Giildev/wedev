import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import bgimg from "./bgimg.jpg";

class App extends Component {
  notify = () => {
    alert(`Our website is currently undergoing scheduled maintenance. We
    Should be back shortly. Thank you for your patience.`);
  };
  render() {
    return (
      <div
        className="main-area center-text"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="display-table">
          <div className="display-table-cell">
            <h1 className="title font-white">
              <b>Comming Soon</b>
            </h1>
            <p className="desc font-white">
              Our website is currently undergoing scheduled maintenance. We
              Should be back shortly. Thank you for your patience.
            </p>

            <button
              className="notify-btn"
              onClick={() => {
                this.notify();
              }}
            >
              <b>NOTIFY US</b>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
