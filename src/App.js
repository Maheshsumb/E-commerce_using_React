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
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCnt, setselectedCnt] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooter, setisHeaderFooter] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
    console.log(responsive);
  };

  const values = {
    countryList,
    selectedCnt,
    setselectedCnt,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooter,
    setisHeaderFooter,
    isLogin,
    setisLogin,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooter === true && <Header />}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>
        <Routes>
          <Route
            path="/product/:id"
            exact={true}
            element={<ProductDetails />}
          />
        </Routes>
        <Routes>
          <Route path="/cart" exact={true} element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/signIn" exact={true} element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/signUp" exact={true} element={<SignUp />} />
        </Routes>
        {isHeaderFooter === true && <Footer />}
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
