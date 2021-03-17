import React, { Component } from "react";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";

export default class Preview extends Component {
  render() {
    return (
      <>
        <Canvas pictureId="sample" />
        <div className="buttons-container">
          <Link to="/select-shape" className="btn btn-lg back-button">
            Back
          </Link>
          <Link to="/" className="btn btn-lg custom-button">
            Finish
          </Link>
        </div>
      </>
    );
  }
}
