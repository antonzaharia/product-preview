export default function rootReducer(
  state = {
    loading: false,
    products: [],
    publicId: null,
    images: [],
    completed: { upload: null, shape: null },
  },
  action
) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    case "UPLOADED":
      return {
        ...state,
        loading: false,
        publicId: action.payload.public_id,
        fileName: action.payload.original_filename,
      };
    case "UPLOAD_DONE":
      return {
        ...state,
        completed: { ...state.completed, upload: action.payload },
      };
    case "SHAPE_DONE":
      return {
        ...state,
        completed: { ...state.completed, shape: action.payload },
      };
    case "CLEAN_LINKS":
      return { ...state, links: [] };
    case "MAKE_PRODUCT":
      return { ...state, links: action.payload.link, loading: false };
    default:
      return state;
  }
}
