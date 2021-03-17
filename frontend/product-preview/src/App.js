import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProducts, uploadPicture } from "./actions/ProductActions";
import SelectInput from "./components/SelectInput";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: "",
      shape: "",
    };
  }

  componentDidMount() {
    this.props.loadProducts();
  }
  handleUpload = (event) => {
    this.setState({ upload: event.target.files[0] });
  };
  handleSelect = (event) => {
    this.setState({ shape: event.target.id });
  };
  handleUploadClick = (event) => {
    event.preventDefault();
    this.props.uploadPicture(this.state.upload);
  };
  renderProducts() {
    return this.props.products.map((product) => (
      <SelectInput
        key={product.id}
        name={product.name}
        url={product.url}
        handleSelect={this.handleSelect}
      />
    ));
  }
  render() {
    return (
      <div>
        <div className="container secondary-color">
          <h1 className="display-4">Product Preview</h1>
          <p className="lead">by Anton Zaharia</p>
          <hr className="my-4" />

          {this.props.loading ? "Loading..." : ""}
          <form>
            <div className="select-div">
              <input
                type="file"
                onChange={this.handleUpload}
                accept="image/png, image/jpeg"
              />

              <button onClick={this.handleUploadClick}>
                {this.props.publicId ? (
                  <CheckCircleIcon
                    style={{ color: "green", marginRight: "10px" }}
                  />
                ) : (
                  ""
                )}
                Upload
              </button>
            </div>

            <div className="shape-select-container">
              {this.renderProducts()}
            </div>
            <button
              to="/"
              className="btn btn-lg custom-button"
              role="button"
              onClick={this.handleSubmit}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  products: state.products,
  publicId: state.publicId,
});
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  uploadPicture: (file) => dispatch(uploadPicture(file)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
