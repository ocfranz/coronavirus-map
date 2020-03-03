import React from "react";
import { render } from "react-dom";

import Button from '../components/Button';
class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="home">
          <Button> Button example</Button>
          <p>Welcome to the ReactJS and ExpressJS generator</p>
        </div>
      </div>
    );
  }
}

export default Home;
