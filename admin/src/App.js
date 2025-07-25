import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main d-flex">
          <div className="sideBarWrapper">
            <Sidebar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />}></Route>
              <Route
                path="/dashboard"
                exact={true}
                element={<Dashboard />}
              ></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
