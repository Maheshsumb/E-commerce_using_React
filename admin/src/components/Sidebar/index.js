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
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 6 ? "active" : ""}`}
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
                className={`w-100 ${isActiveButton === 7 ? "active" : ""}`}
              >
                <span className="icon">
                  <MdGames />
                </span>
                Products
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 8 ? "active" : ""}`}
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
                className={`w-100 ${isActiveButton === 9 ? "active" : ""}`}
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
                className={`w-100 ${isActiveButton === 10 ? "active" : ""}`}
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
                className={`w-100 ${isActiveButton === 11 ? "active" : ""}`}
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
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 12 ? "active" : ""}`}
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
            <Button
              className={`w-100 ${isActiveButton === 13 ? "active" : ""}`}
            >
              <span className="icon">
                <MdGames />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${isActiveButton === 14 ? "active" : ""}`}
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
                className={`w-100 ${isActiveButton === 15 ? "active" : ""}`}
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
                className={`w-100 ${isActiveButton === 16 ? "active" : ""}`}
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
                className={`w-100 ${isActiveButton === 17 ? "active" : ""}`}
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
      </div>
    </>
  );
};
export default Sidebar;
