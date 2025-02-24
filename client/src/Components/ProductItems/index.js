import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShareForwardLine } from "react-icons/ri";
import { useContext } from "react";
import { MyContext } from "../../App";
const ProductItems = (props) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
  };

  return (
    <>
      <div className={`item productItem  cursor ${props.itemView}`}>
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
            <Button>
              <RiShareForwardLine style={{ fontSize: "18px" }} />
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
    </>
  );
};
export default ProductItems;
