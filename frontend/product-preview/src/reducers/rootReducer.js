export default function rootReducer(
  state = { loading: false, products: [], publicId: null },
  action
) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    case "UPLOADED":
      return { ...state, loading: false, publicId: action.payload };
    default:
      return state;
  }
}
