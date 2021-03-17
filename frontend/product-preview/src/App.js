import React, { Component } from "react";
import { connect } from "react-redux";
import InfoBar from "./components/InfoBar";
import Upload from "./components/Upload";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="main-container">
        <h1 className="display-4">Product Preview</h1>
        <p className="lead">by Anton Zaharia</p>
        <hr className="my-4" />

        {this.props.loading ? "Loading..." : ""}
        <div className="content-container">
          <div className="select-div">
            <form>
              <Upload />
              <div className="buttons-container">
                <button
                  className="btn btn-lg custom-button"
                  onClick={this.handleSubmit}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
          <InfoBar />
        </div>
      </div>
    );
  }
}

export default connect()(App);
