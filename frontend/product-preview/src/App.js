import React, { Component } from "react";
import { connect } from "react-redux";
import InfoBar from "./components/InfoBar";
import Upload from "./components/Upload";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Shape from "./components/Shape";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: null,
      shape: null,
      preview: null,
    };
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="display-4">Product Preview</h1>
        <p className="lead">by Anton Zaharia</p>
        <hr className="my-0" />

        {this.props.loading ? "Loading..." : ""}
        <div className="content-container">
          <div className="select-div">
            <form>
              <Router>
                <Route exact path="/">
                  <Upload />
                </Route>
                <Route exact path="/select-shape">
                  <Shape />
                </Route>
                <Route exact path="/preview">
                  <Preview />
                </Route>
              </Router>
            </form>
          </div>
          <InfoBar
            upload={this.state.upload}
            shape={this.state.shape}
            preview={this.state.preview}
          />
        </div>
      </div>
    );
  }
}

export default connect()(App);
