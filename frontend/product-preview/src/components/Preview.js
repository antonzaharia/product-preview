import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: false,
      frame: false,
      print: false,
    };
  }

  componentDidMount() {
    if (this.props.completed.upload && this.props.completed.shape) {
      this.setState({ [this.props.completed.shape]: true });
    }
  }

  makeSrc = () => {
    return `https://res.cloudinary.com/picfair-test/image/upload/q_60/c_fill,h_735,l_${this.props.publicId},w_480,x_175,y_-545/v1615990146/portrait_straight_byschw.jpg
    `;
  };
  render() {
    return (
      <>
        {this.state.canvas ? <Canvas pictureId={this.props.publicId} /> : ""}
        {this.state.frame ? (
          <img
            style={{ height: "300px", maxWidth: "300px" }}
            src={this.makeSrc()}
          ></img>
        ) : (
          ""
        )}
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
const mapStateToProps = (state) => ({
  completed: state.completed,
  publicId: state.publicId,
});
export default connect(mapStateToProps)(Preview);
