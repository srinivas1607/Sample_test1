import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";
export async function getMethod(route) {
  try {
    let res = await axios.get(API_URL + route);
    return res.data;
  } catch (err) {
    return err
      ? err.response
        ? err.response.data
          ? err.response.data
          : err
        : err
      : err;
  }
}
