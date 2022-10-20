import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home/Home";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Navbar from "./components/Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
