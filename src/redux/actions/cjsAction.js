// COMMERCE
import { commerce } from "../../lib/commerce";

export const getProducts = (section) => async (dispatch) => {
  try {
    const { data } = await commerce.products.list();
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: { products: data },
    });
  } catch {
    console.log("error");
  }
};
