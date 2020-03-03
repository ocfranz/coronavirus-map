import React from "react";
import { render } from "react-dom";
import Button from '../components/Button';
import {GlobalStyle} from '../styles/gobal'; 
class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <GlobalStyle />
        <div className="home">
          <Button> Button exaddmple</Button>
          <p>Welcome to the ReactJS and ExpressJS generator</p>
        </div>
      </div>
    );
  }
}

export default Home;
