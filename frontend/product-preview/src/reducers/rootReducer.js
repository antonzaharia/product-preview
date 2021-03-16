export default function rootReducer(
  state = { loading: false, products: [] },
  action
) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}
