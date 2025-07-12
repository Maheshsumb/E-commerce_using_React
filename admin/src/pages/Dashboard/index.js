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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
// import { Chart } from "react-google-charts";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

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
  const data = [
    { name: "Mon", Sales: 2000 },
    { name: "Tue", Sales: 3000 },
    { name: "Wed", Sales: 2000 },
    { name: "Thu", Sales: 2780 },
    { name: "Fri", Sales: 1890 },
    { name: "Sat", Sales: 1390 },
    { name: "Sun", Sales: 3490 },
  ];

  // FilterCard
  //Number of row
  const [noOfRow, setnoOfRow] = React.useState("12");

  const handleChangeNoOfRow = (event) => {
    setnoOfRow(event.target.value);
  };
  //Category
  const [category, setcategory] = React.useState("1");

  const handleChangeCategory = (event) => {
    setcategory(event.target.value);
  };

  //Brand
  const [brand, setbrand] = React.useState("10");
  const handleChangeBrand = (event) => {
    setbrand(event.target.value);
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
              <div className="contentWrapper">
                <div className="d-flex align-items-center w-100 bottomEle">
                  <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                  <div className="ml-auto">
                    <Button
                      className="ml-auto optionsIcon"
                      onClick={handleClick}
                    >
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
              </div>
              <div className="graphWrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorSales"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#1f5ccf"
                          stopOpacity={0.5}
                        />
                        <stop
                          offset="100%"
                          stopColor="#1f5ccf"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>

                    <Area
                      type="monotone"
                      dataKey="Sales"
                      stroke="#ccc"
                      strokeWidth={1.5}
                      fill="#1e5bce"
                      dot={false}
                      activeDot={{ r: 4 }}
                    />

                    <CartesianGrid
                      stroke="rgba(176, 176, 176, 0.43)"
                      strokeDasharray="2 2"
                    />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />

                    <Tooltip
                      cursor={false}
                      contentStyle={{
                        backgroundColor: "#f0f0f0",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#5f5e6d",
                      }}
                      labelStyle={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#5f5e6d",
                      }}
                      itemStyle={{
                        fontSize: "12px",
                        color: "#5f5e6d",
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow p-3 mt-4">
          <h3 className="hd">best selling products</h3>
          <div className="row cardFilter mt-3">
            <div className="col-md-3">
              <h4>Show by</h4>
              <FormControl
                className="m-0 filterInput w-100"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={noOfRow}
                  onChange={handleChangeNoOfRow}
                >
                  <MenuItem value={12}> </MenuItem>
                  <MenuItem value={12}>12 row</MenuItem>
                  <MenuItem value={24}>24 row</MenuItem>
                  <MenuItem value={36}>36 row</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>category by</h4>
              <FormControl
                className="m-0 filterInput w-100"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={category}
                  onChange={handleChangeCategory}
                >
                  <MenuItem value={1}> </MenuItem>
                  <MenuItem value={1}>Mens</MenuItem>
                  <MenuItem value={2}>Womans</MenuItem>
                  <MenuItem value={3}>Kids</MenuItem>
                  <MenuItem value={4}>Accessories</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>brand by</h4>
              <FormControl
                className="m-0 filterInput w-100"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={brand}
                  onChange={handleChangeBrand}
                >
                  <MenuItem value={10}> </MenuItem>
                  <MenuItem value={10}>ecstasy</MenuItem>
                  <MenuItem value={20}>freeland</MenuItem>
                  <MenuItem value={30}>rongdhonu </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>brand by</h4>
              <TextField
                className="filterInput"
                id="outlined-search"
                type="search"
                placeholder="id / name / category..etc"
              />
            </div>
          </div>

          <div className="table-responsive mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>uid</th>
                  <th>product</th>
                  <th>category</th>
                  <th>brand</th>
                  <th>price</th>
                  <th>stock</th>
                  <th>rating</th>
                  <th>order</th>
                  <th>sales</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex productBox align-items-center">
                      <div className="productImg">
                        <div className="img">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-success">$20.99</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="tableAction d-flex align-items-center">
                      <Button className="actionView">
                        <FaEye />
                      </Button>
                      <Button className="actionEdit">
                        <MdEdit />
                      </Button>
                      <Button className="actionDelete">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex productBox align-items-center">
                      <div className="productImg">
                        <div className="img">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-success">$20.99</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="tableAction d-flex align-items-center">
                      <Button className="actionView">
                        <FaEye />
                      </Button>
                      <Button className="actionEdit">
                        <MdEdit />
                      </Button>
                      <Button className="actionDelete">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex productBox align-items-center">
                      <div className="productImg">
                        <div className="img">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-success">$20.99</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="tableAction d-flex align-items-center">
                      <Button className="actionView">
                        <FaEye />
                      </Button>
                      <Button className="actionEdit">
                        <MdEdit />
                      </Button>
                      <Button className="actionDelete">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex productBox align-items-center">
                      <div className="productImg">
                        <div className="img">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-success">$20.99</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="tableAction d-flex align-items-center">
                      <Button className="actionView">
                        <FaEye />
                      </Button>
                      <Button className="actionEdit">
                        <MdEdit />
                      </Button>
                      <Button className="actionDelete">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex productBox align-items-center">
                      <div className="productImg">
                        <div className="img">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-success">$20.99</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="tableAction d-flex align-items-center">
                      <Button className="actionView">
                        <FaEye />
                      </Button>
                      <Button className="actionEdit">
                        <MdEdit />
                      </Button>
                      <Button className="actionDelete">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex productBox align-items-center">
                      <div className="productImg">
                        <div className="img">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-success">$20.99</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="tableAction d-flex align-items-center">
                      <Button className="actionView">
                        <FaEye />
                      </Button>
                      <Button className="actionEdit">
                        <MdEdit />
                      </Button>
                      <Button className="actionDelete">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex tableFooter">
              <Pagination count={10} color="primary" className="pagination" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
