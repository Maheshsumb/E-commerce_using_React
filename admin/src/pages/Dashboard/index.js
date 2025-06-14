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

// import { Chart } from "react-google-charts";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

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
  // Charts settings
  ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip
  );

  const data = {
    labels: ["Mon", "Thu", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sales",
        data: [320, 800, 200, 900, 400, 900],
        borderColor: "#66b3ff",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        ticks: { display: false },
        grid: {
          drawTicks: false,
          borderColor: "transparent",
          color: "#ffffff33",
          lineWidth: 0.5,
          borderDash: [10, 10],
        },
      },
      y: {
        ticks: { display: false },
        grid: {
          drawTicks: false,
          borderColor: "transparent",
          color: "#ffffff33",
          lineWidth: 0.5,
          borderDash: [10, 10],
        },
      },
    },
  };
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
          <div className="col-md-4 pl-2">
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
              <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
              <p>$3,578.90 in last month</p>
              <div className="graphWrapper">
                <Line data={data} options={chartOptions} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
