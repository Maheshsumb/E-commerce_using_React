import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdOutlineMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MdLockReset } from "react-icons/md";

import { MdOutlineManageAccounts } from "react-icons/md";

import Logout from "@mui/icons-material/Logout";
import { useState } from "react";
import { Divider } from "@mui/material";
import NotificationItem from "../NotificationItem";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  const [isNotificationDropOpen, setisNotificationDropOpen] = useState(false);
  // const notificationOpen = Boolean(anchorEl);
  const handleClickNotificationDrop = (event) => {
    setisNotificationDropOpen(true);
  };
  const handleCloseNotificationDrop = () => {
    setisNotificationDropOpen(false);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* Header Logo */}
            <div className="col-sm-2 part1">
              <Link to="/" className="d-flex align-items-center logo">
                <img src={logo} alt="Logo" />
                <span className="ml-2">Admin</span>
              </Link>
            </div>
            {/* Header Menu Button & Search  Box */}
            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdOutlineMenuOpen />
              </Button>
              <SearchBox />
            </div>
            <div className="col-sm-7 d-flex align-items-center part3 justify-content-end">
              <Button className="rounded-circle mr-3">
                <MdOutlineLightMode />
              </Button>
              <Button className="rounded-circle mr-3">
                <MdOutlineShoppingCart />
              </Button>
              <Button className="rounded-circle mr-3">
                <MdOutlineEmail />
              </Button>
              <Button
                className="rounded-circle mr-3"
                onClick={handleClickNotificationDrop}
              >
                <IoMdNotificationsOutline />
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="notification"
                className="notification"
                open={isNotificationDropOpen}
                onClose={handleClickNotificationDrop}
                onClick={handleCloseNotificationDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head pl-3 pb-0">
                  <h4>Notifications (34)</h4>
                </div>
                <Divider className="mb-0 " />
                <div className="scroll">
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <NotificationItem />{" "}
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <NotificationItem />{" "}
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <NotificationItem />{" "}
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <NotificationItem />{" "}
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <NotificationItem />{" "}
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <NotificationItem />{" "}
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <NotificationItem />{" "}
                  </MenuItem>
                </div>
                <div className="pl-2 pr-2 w-100 p-1">
                  <Button className="btn btn-blue w-100">
                    View all Notification
                  </Button>
                </div>
              </Menu>

              <div className="myAccWrapper">
                <Button
                  className="myAcc  d-flex align-items-center "
                  onClick={handleClickMyAccDrop}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>Mahi Sharma</h4>
                    <p className="mb-0">@mahi07 </p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <MdOutlineManageAccounts fontSize="large" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <MdLockReset fontSize="large" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
