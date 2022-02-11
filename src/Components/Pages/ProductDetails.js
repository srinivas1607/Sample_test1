import React, { useState, useEffect } from "react";
import classes from "./ProductDetails.module.scss";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../Config/ApiService";
const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    getProductDetails(id, (res) => {
      setDetails(res);
    });
  }, [id]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <img src={details.image} alt="product" />
      </div>
      <div className={classes.details}>
        <h4>{details.title}</h4>
        <h5>Cost : {details.price}</h5>
        <b>Description :</b>
        <p>{details.description}</p>
        <button
          type="button"
          className={`${classes.outline} ${classes["white-green"]}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
