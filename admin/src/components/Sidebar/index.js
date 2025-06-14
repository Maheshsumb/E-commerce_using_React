import Button from "@mui/material/Button";
import { RiDashboardFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { MdGames } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const [isActiveButton, setisActiveButton] = useState(0);
  const [isToggle, setisToggle] = useState(false);

  const handleClick = (index) => {
    setisActiveButton(index);
    setisToggle(!isToggle);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 0 ? "active" : ""}`}
                onClick={() => handleClick(0)}
              >
                <span className="icon">
                  <RiDashboardFill />
                </span>
                Dashboard
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 1 ? "active" : ""}`}
                onClick={() => handleClick(1)}
              >
                <span className="icon">
                  <MdGames />
                </span>
                Products
                <span className="arrow">
                  {isToggle === true ? <FaAngleDown /> : <FaAngleRight />}
                </span>
              </Button>
              <div
                className={`submenuWrapper ${
                  isActiveButton === 1 && isToggle === true
                    ? "expand"
                    : "collapsed"
                }`}
              >
                <ul className="submenu">
                  <li>
                    <Link to="#">Product List</Link>
                  </li>
                  <li>
                    <Link to="#">Product View</Link>
                  </li>
                  <li>
                    <Link to="#">Product Upload</Link>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 2 ? "active" : ""}`}
                onClick={() => handleClick(2)}
              >
                <span className="icon">
                  <IoMdCart />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 3 ? "active" : ""}`}
                onClick={() => handleClick(3)}
              >
                <span className="icon">
                  <MdMessage />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 4 ? "active" : ""}`}
                onClick={() => handleClick(44)}
              >
                <span className="icon">
                  <IoMdNotifications />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 5 ? "active" : ""}`}
                onClick={() => handleClick(5)}
              >
                <span className="icon">
                  <IoMdSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
        <br />
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <IoMdLogOut /> Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
