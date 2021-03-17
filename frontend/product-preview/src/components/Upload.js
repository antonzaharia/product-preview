import React, { Component } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { connect } from "react-redux";
import { markAsDone, uploadPicture } from "../actions/ProductActions";
import { Link } from "react-router-dom";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: "",
    };
  }

  handleUpload = (event) => {
    this.setState({ upload: event.target.files[0] });
  };
  handleUploadClick = (event) => {
    event.preventDefault();
    this.props.uploadPicture(this.state.upload);
  };
  render() {
    return (
      <>
        <h4>Select a Image to create a product.</h4>
        <input
          type="file"
          onChange={this.handleUpload}
          accept="image/png, image/jpeg"
        />
        <div>
          {this.props.publicId ? (
            <CheckCircleIcon style={{ color: "green", marginRight: "10px" }} />
          ) : (
            ""
          )}
        </div>
        <button onClick={this.handleUploadClick}>Upload</button>
        <div className="buttons-container">
          <Link to="/select-shape" className="btn btn-lg custom-button">
            Next
          </Link>
        </div>
        {this.props.fileName
          ? this.props.markAsDone("upload", this.props.fileName)
          : console.log("no file yet")}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.loading,
  publicId: state.publicId,
  fileName: state.fileName,
});
const mapDispatchToProps = (dispatch) => ({
  uploadPicture: (file) => dispatch(uploadPicture(file)),
  markAsDone: (name, data) => dispatch(markAsDone(name, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Upload);
