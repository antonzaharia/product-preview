import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Images from "./Images";
import Loading from "./Loading";
import { cleanLinks } from "../actions/ProductActions";

class Preview extends Component {
  handleCleanLinks = () => {
    this.props.cleanLinks();
  };
  render() {
    return (
      <>
        {this.props.loading ? (
          <Loading />
        ) : (
          <Images images={this.props.links} />
        )}
        <div className="buttons-container">
          <Link
            to="/select-shape"
            className="btn btn-lg back-button"
            onClick={this.handleCleanLinks}
          >
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
  links: state.links,
  loading: state.loading,
});
const mapDispatchToProps = (dispatch) => ({
  cleanLinks: () => dispatch(cleanLinks()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Preview);
