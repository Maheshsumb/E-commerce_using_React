import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductModal from "../ProductModal";
import { useState } from "react";

const ProductItems = () => {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  const viewProductDetails = (id) => {
    setisOpenProductModal(true);
  };
  const closeProductModal = () => {
    setisOpenProductModal(false);
  };

  return (
    <>
      <div className="item productItem cursor">
        <div className="imageWrapper">
          <img
            className="w-100"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
            alt=""
          />
          <span className="badge badge-primary">28%</span>
          <div className="action">
            <Button
              onClick={() => {
                viewProductDetails(1);
              }}
            >
              <TfiFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>
      {isOpenProductModal === true && (
        <ProductModal closeProductModal={closeProductModal} />
      )}
    </>
  );
};
export default ProductItems;