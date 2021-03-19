import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadProducts,
  makeProduct,
  markAsDone,
} from "../actions/ProductActions";
import SelectInput from "./SelectInput";

class Shape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: "",
      size: "20x25.5",
    };
  }
  setOrientation = (size) => {
    return size.split("x")[0] > size.split("x")[1] ? "landscape" : "portrait";
  };
  componentDidMount() {
    this.props.loadProducts();
  }
  handleSelect = (event) => {
    this.setState({ shape: event.target.id });
    this.props.markAsDone("shape", event.target.id);
  };

  handleSelectNext = () => {
    let data = {
      publicId: this.props.publicId,
      size: this.state.size,
      orientation: this.setOrientation(this.state.size),
      shape: this.state.shape,
    };
    this.props.makeProduct(data);
  };
  handleSize = (event) => {
    this.setState({ size: event.target.value });
  };
  render() {
    return (
      <>
        {this.props.loading ? "Loading..." : ""}
        <div className="shape-select-container">
          {this.props.products.map((product) => (
            <SelectInput
              key={product.id}
              name={product.name}
              handleSelect={this.handleSelect}
            />
          ))}
        </div>
        <div className="select-container">
          <select name="size" id="size" onChange={this.handleSize}>
            <option value="20x25.5">20cm x 25.5cm</option>
            <option value="30x40">30cm x 40cm</option>
            <option value="30x45">30cm x 45cm</option>
            <option value="50x90">50cm x 90cm</option>
            <option value="40x30">40cm x 30cm</option>
            <option value="50x40">50cm x 40cm</option>
            <option value="90x50">90cm x 50cm</option>
          </select>
        </div>
        <div className="buttons-container">
          <Link to="/" className="btn btn-lg back-button">
            Back
          </Link>
          <Link
            to="/preview"
            className="btn btn-lg custom-button"
            onClick={this.handleSelectNext}
          >
            Next
          </Link>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  loading: state.loading,
  publicId: state.publicId,
});
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  markAsDone: (name, data) => dispatch(markAsDone(name, data)),
  makeProduct: (data) => dispatch(makeProduct(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shape);
