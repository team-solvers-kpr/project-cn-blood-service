import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/pages/Home/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-4xl text-red-700 font-bold">
        Welcome to Canadian Blood Service.
      </h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
