import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import bgimg from "./bgimg.jpg";
import axios from "axios";

class App extends Component {
  notify = () => {
    let person = prompt("Please enter your email:", "");
    if (person) {
      console.log("hablale");
      axios({
        method: "POST",
        url: "http://localhost:4000/api/send",
        data: {
          email: person
        }
      }).then(response => {
        if (response.data.msg === "success") {
          console.log("Message Sent...");
        } else if (response.data.msg === "fail") {
          console.log("Message failed to send...", response.data);
        }
      });
    } else {
      console.log("vacio");
    }
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
              <b>GET UPDATED</b>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
