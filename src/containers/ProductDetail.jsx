import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss"

const ProductDetail = () => {
  return (
    <aside className="product_detail">
      <div className="product_detail-close">
        <img src="../assets/icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
