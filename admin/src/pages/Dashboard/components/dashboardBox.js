import { HiOutlineDotsVertical } from "react-icons/hi";
import { Button } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const DashboardBox = (props) => {
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
        <div className="d-flex align-items-center w-100">
          <h6 className="text-white mb-0 mt-0">Last Month</h6>
          <Button className="ml-auto optionsIcon">
            <HiOutlineDotsVertical />
          </Button>
        </div>
      </Button>
    </>
  );
};
export default DashboardBox;
