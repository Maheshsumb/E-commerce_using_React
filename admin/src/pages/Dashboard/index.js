import DashboardBox from "./components/dashboardBox";
import { FaUsers } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaHistory } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Button } from "@mui/material";

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = ["last day", "last week", "last month", "last year"];

  const ITEM_HEIGHT = 48;
  return (
    <>
      <div className="content-right w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1b9f53", "#4ed988"]}
                icon={<FaUsers />}
                title={"total users"}
                growth={true}
              />
              <DashboardBox
                color={["#c00fe1", "#ec66fd"]}
                icon={<IoMdCart />}
                title={"total orders"}
              />

              <DashboardBox
                color={["#2c79e5", "#62b1f4"]}
                icon={<HiMiniShoppingBag />}
                title={"total Products"}
              />

              <DashboardBox
                color={["#e1950e", "#f3cf2b"]}
                icon={<BsStars />}
                title={"total Reviews"}
              />
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                <div className="ml-auto">
                  <Button className="ml-auto optionsIcon" onClick={handleClick}>
                    <HiOutlineDotsVertical />
                  </Button>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                      list: {
                        "aria-labelledby": "long-button",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        <FaHistory className="mr-2" /> {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
