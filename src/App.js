import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Shared/Navbar/Navbar";
import Home from "./components/pages/Home/Home/Home";
import Footer from "./components/pages/Shared/Footer/Footer";
import { HospitalServices } from "./components/pages/Hospital-services/HospitalServices";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hospital-services" element={<HospitalServices />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
