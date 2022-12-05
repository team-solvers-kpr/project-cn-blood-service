import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home/Home";
import { HospitalServices } from "./components/Pages/Hospital-services/HospitalServices";
import Signin from "./components/Pages/Login/Signin/Signin";
import Notfound from "./components/Pages/Notfound/Notfound";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Navbar from "./components/Pages/Shared/Navbar/Navbar";
import AllProducts from "./components/Pages/Shop/AllProducts/AllProducts";
import Shop from "./components/Pages/Shop/Shop/Shop";
import Gifts from "./components/Pages/Shop/ShopAd/Gifts/Gifts/Gifts";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <div className="App">
      <Wrapper>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/hospital-services"
            element={<HospitalServices />}
          ></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/gifts" element={<Gifts />}></Route>
          <Route path="/allProducts" element={<AllProducts />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
}

export default App;
