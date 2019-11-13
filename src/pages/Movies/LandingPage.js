import React, { Component } from "react";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default LandingPage;
