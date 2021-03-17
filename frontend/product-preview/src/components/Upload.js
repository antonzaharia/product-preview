import React, { Component } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { connect } from "react-redux";
import { uploadPicture } from "../actions/ProductActions";

class Upload extends Component {
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
        <input
          type="file"
          onChange={this.handleUpload}
          accept="image/png, image/jpeg"
        />

        <button onClick={this.handleUploadClick}>
          {this.props.publicId ? (
            <CheckCircleIcon style={{ color: "green", marginRight: "10px" }} />
          ) : (
            ""
          )}
          Upload
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.loading,
  publicId: state.publicId,
});
const mapDispatchToProps = (dispatch) => ({
  uploadPicture: (file) => dispatch(uploadPicture(file)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Upload);
