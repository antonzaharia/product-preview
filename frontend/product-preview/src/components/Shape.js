import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Shape extends Component {
  render() {
    return (
      <>
        Shape
        <div className="buttons-container">
          <Link to="/" className="btn btn-lg back-button">
            Back
          </Link>
          <Link to="/preview" className="btn btn-lg custom-button">
            Next
          </Link>
        </div>
      </>
    );
  }
}
