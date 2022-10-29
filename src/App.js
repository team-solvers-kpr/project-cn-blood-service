import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home/Home";
import Notfound from "./components/Pages/Notfound/Notfound";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Navbar from "./components/Pages/Shared/Navbar/Navbar";

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
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
}

export default App;
