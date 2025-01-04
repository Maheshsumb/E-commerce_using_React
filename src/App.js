import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";

const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCnt, setselectedCnt] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      // console.log(res.data.data);
    });
  };

  const values = {
    countryList,
    selectedCnt,
    setselectedCnt,
    isOpenProductModal,
    setisOpenProductModal,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>
        <Footer />
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
