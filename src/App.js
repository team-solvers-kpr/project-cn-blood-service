import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Shared/Navbar/Navbar";
import Home from "./components/pages/Home/Home/Home";
import Footer from "./components/pages/Shared/Footer/Footer";
import { HospitalServices } from "./components/pages/Hospital-services/HospitalServices";
import Notfound from "./components/pages/Notfound/Notfound";

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
      <Footer></Footer>
      <Wrapper>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/hospital-services" element={<HospitalServices />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
}

export default App;
