import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadProducts, markAsDone } from "../actions/ProductActions";
import SelectInput from "./SelectInput";

class Shape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: "",
    };
  }
  componentDidMount() {
    this.props.loadProducts();
  }
  handleSelect = (event) => {
    this.setState({ shape: event.target.id });
    this.props.markAsDone("shape", event.target.id);
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
        <div className="buttons-container">
          <Link to="/" className="btn btn-lg back-button">
            Back
          </Link>
          <Link to="/preview" className="btn btn-lg custom-button">
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
});
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  markAsDone: (name, data) => dispatch(markAsDone(name, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shape);
