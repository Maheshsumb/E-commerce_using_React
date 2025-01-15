import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";
import { IoCartSharp } from "react-icons/io5";

const ProductModal = () => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={true}
        onClose={() => {
          context.setisOpenProductModal(false);
        }}
        className="productModal"
      >
        <Button
          className="close_"
          onClick={() => {
            context.setisOpenProductModal(false);
          }}
        >
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$20</span>
              <span className="netPrice text-danger lg">$14</span>
            </div>
            <span className="badge bg-success">In Stock</span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-round   ">
                <IoCartSharp className="mr-2" />
                Add to cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button variant="outlined" className="btn-round btn-sml">
                <IoIosHeartEmpty />
                &nbsp; Add to Wishlist
              </Button>
              <Button variant="outlined" className="btn-round btn-sml ml-3">
                <MdOutlineCompareArrows />
                &nbsp; compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
