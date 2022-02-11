import { getMethod } from "./Api.call";

export const getCategories = async (cb) => {
  let res = await getMethod("/categories");
  cb(res);
};
export const getCategorieProducts = async (data, cb) => {
  let res = await getMethod("/category/" + data);
  cb(res);
};
export const getProductDetails = async (data, cb) => {
  let res = await getMethod("/" + data);
  cb(res);
};
