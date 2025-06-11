import DashboardBox from "./components/dashboardBox";
import { FaUsers } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";

const Dashboard = () => {
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
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
