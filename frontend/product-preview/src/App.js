import React, { Component } from "react";
import { connect } from "react-redux";
import loadProducts from "./actions/ProductActions";
import SelectInput from "./components/SelectInput";

class App extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }
  renderProducts() {
    return this.props.products.map((product) => (
      <SelectInput key={product.id} name={product.name} url={product.url} />
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
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </div>

            <div className="shape-select-container">
              {this.renderProducts()}
            </div>
            <button to="/" className="btn btn-lg custom-button" role="button">
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
});
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
