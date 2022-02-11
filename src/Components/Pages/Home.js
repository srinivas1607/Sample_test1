import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";
import { useHistory } from "react-router-dom";
import {
  getCategories,
  getCategorieProducts,
  getProductDetails,
} from "../Config/ApiService";

const Home = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getCategories((res) => {
      setCategories(res);
    });
  }, []);
  useEffect(() => {
    getCategorieProducts(selectedCategory, (res) => {
      setProducts(res);
    });
  }, [selectedCategory]);
  const details = (details) => {
    console.log(details);
    history.push(`/product/${details.id}`);
  };
  return (
    <div className={classes.home}>
      <div className={classes.categories}>
        {categories.map((category, index) => (
          <div
            className={`${classes.name} ${
              selectedCategory === category && classes.active
            }`}
            key={index}
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={classes.products}>
        {products.map((product) => (
          <div
            className={classes.card}
            key={product.id}
            onClick={() => {
              details(product);
            }}
          >
            <div className={classes["card-header"]}>
              <img src={product.image} alt="Avatar" />
            </div>
            <div className={classes.container}>
              <h4>
                <b>{product.title}</b>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
