import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import React from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedCountry, setselectedCountry] = useState(null);
  const [countryList, setcountryList] = useState([]);
  // const [countryList2, setcountryList2] = useState([]);

  const context = useContext(MyContext);
  const selectCountry = (index, country) => {
    setselectedCountry(index);
    setisOpenModal(false);
    context.setselectedCnt(country);
  };
  useEffect(() => {
    setcountryList(context.countryList);
  }, []);
  const FilterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  };
  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCnt !== ""
              ? context.selectedCnt.length > 10
                ? context.selectedCnt?.substr(0, 10) + "..."
                : context.selectedCnt
              : "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter the location Where you want to deliver order product</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <MdClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search Your Area....."
            onChange={FilterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    className={`${selectedCountry === index ? "active" : " "}`}
                    onClick={() => selectCountry(index, item.country)}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropdown;
