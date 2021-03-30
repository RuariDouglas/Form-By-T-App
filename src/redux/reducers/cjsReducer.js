const initState = {
  products: {},
  loading: true,
};

const cjsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case "CLEAR_PRODUCTS":
      return initState;
    default:
      return { ...state };
  }
};

export default cjsReducer;
