import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Signin from "./components/Pages/Login/Signin/Signin";
import AllProducts from "./components/Pages/Shop/AllProducts/AllProducts";
import Shop from "./components/Pages/Shop/Shop/Shop";
import Home from './components/pages/Home/Home/Home'
import { HospitalServices } from "./components/pages/Hospital-services/HospitalServices";
import Notfound from "./components/pages/Notfound/Notfound";
import Footer from "./components/pages/Shared/Footer/Footer";
import Navbar from "./components/pages/Shared/Navbar/Navbar";
import AboutUs from './components/pages/AboutUs/AboutUs'

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
          <Route path="/hospital-services" element={<HospitalServices />}></Route>
          <Route path="/about-Us" element={<AboutUs/>}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>
        <AboutUs></AboutUs>
      </Wrapper>
    </div>
  );
}

export default App;
