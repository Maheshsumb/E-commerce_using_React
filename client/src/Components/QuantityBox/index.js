import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
const QuantityBox = () => {
  const [inputVal, setinputVal] = useState(1);
  const minus = () => {
    if (inputVal !== 1) {
      setinputVal(inputVal - 1);
    }
  };
  const plus = () => {
    setinputVal(inputVal + 1);
  };
  return (
    <div className="quantityDropDown d-flex align-items-center">
      <Tooltip title="Decrease" placement="bottom">
        <Button onClick={minus}>
          <FaMinus />
        </Button>
      </Tooltip>
      <Tooltip title="Increase" placement="bottom">
        <input type="text" value={inputVal} className="mr-2" />
        <Button onClick={plus}>
          <FaPlus />
        </Button>
      </Tooltip>
    </div>
  );
};
export default QuantityBox;
