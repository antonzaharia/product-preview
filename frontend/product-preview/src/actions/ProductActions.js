export default function loadProducts() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3001/products")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "LOAD_PRODUCTS", payload: data }));
  };
}
