import React, { Component } from "react";
import { connect } from "react-redux";
import InfoBar from "./components/InfoBar";
import Upload from "./components/Upload";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shape from "./components/Shape";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          {console.log(this.state)}
          <InfoBar upload={this.props.fileName} shape={this.props.shape} />
        </div>
        <footer></footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fileName: state.fileName,
  shape: state.completed.shape,
});
export default connect(mapStateToProps)(App);
