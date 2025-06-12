import { HiOutlineDotsVertical } from "react-icons/hi";
import { Button } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaHistory } from "react-icons/fa";

const DashboardBox = (props) => {
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
      <Button
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right,${props.color[0]},${props.color[1]})`,
        }}
      >
        {props.growth === true ? (
          <span className="chart">
            <TrendingUpIcon />
          </span>
        ) : (
          <span className="chart">
            <TrendingDownIcon />
          </span>
        )}
        <div className="d-flex w-100" style={{ zIndex: "1000" }}>
          <div className="col1">
            <h4 className="text-white mb-0">{props.title}</h4>
            <span className="text-white">277</span>
          </div>
          <div className="ml-auto">
            {props.icon ? <span className="icon">{props.icon}</span> : ""}
          </div>
        </div>
        <div className="d-flex align-items-center w-100 bottomEle">
          <h6 className="text-white mb-0 mt-0">Last Month</h6>
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
      </Button>
    </>
  );
};
export default DashboardBox;
