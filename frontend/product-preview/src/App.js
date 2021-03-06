import React, { Component } from "react";
import { connect } from "react-redux";
import InfoBar from "./components/InfoBar";
import Upload from "./components/Upload";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shape from "./components/Shape";
import Preview from "./components/Preview";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <header>
          <h1 className="display-4">Product Preview</h1>
          <p className="lead">by Anton Zaharia</p>
          <hr className="my-0" />
        </header>
        {this.props.loading ? "Loading..." : ""}
        <div className="content-container">
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
          <InfoBar
            upload={this.props.fileName}
            shape={this.props.shape}
            preview={this.props.view}
          />
        </div>
        <footer></footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fileName: state.fileName,
  shape: state.completed.shape,
  view: state.completed.view,
});
export default connect(mapStateToProps)(App);
