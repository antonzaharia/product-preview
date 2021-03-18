import axios from "axios";

export function loadProducts() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3001/products")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "LOAD_PRODUCTS", payload: data }));
  };
}
export function markAsDone(name, data) {
  return (dispatch) => {
    if (name === "upload") {
      dispatch({ type: "UPLOAD_DONE", payload: data });
    } else if (name === "shape") {
      dispatch({ type: "SHAPE_DONE", payload: data });
    }
  };
}
export function uploadPicture(file) {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fipuq2uv");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/picfair-test/image/upload",
        formData
      )
      .then((response) => {
        dispatch({ type: "UPLOADED", payload: response.data });
      });
  };
}
export function makeProduct(data) {
  return (dispatch) => {
    fetch("http://localhost:3001/make-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        publicId: data.publicId,
        scale: data.scale,
        size: data.size,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "MAKE_PRODUCT", payload: data }));
  };
}
