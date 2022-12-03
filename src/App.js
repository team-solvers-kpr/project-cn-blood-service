import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Signin from "./components/Pages/Login/Signin/Signin";
import AllProducts from "./components/Pages/Shop/AllProducts/AllProducts";
import Shop from "./components/Pages/Shop/Shop/Shop";
import Home from "./components/Pages/Home/Home/Home";
import Navbar from "./components/Pages/Shared/Navbar/Navbar";
import HospitalServices from "./components/Pages/Hospital-services/HospitalServices";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Notfound from "./components/Pages/Notfound/Notfound";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Research from "./components/Pages/Research/Research";
import Careers from "./components/Pages/Careers/Careers";

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
          <Route path="/allProducts" element={<AllProducts />}></Route>
          <Route
            path="/hospital-services"
            element={<HospitalServices />}
          ></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/about-Us" element={<AboutUs />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
}

export default App;
