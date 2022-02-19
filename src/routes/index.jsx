import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Home";
import Bargains from "../pages/Bargains/";
import Fruitspage from "../pages/Fruits/";
import LocalMarket from "../pages/LocalMarket";
import AboutUs from "../pages/AboutUs";
import Founders from "../pages/Founders";
import Login from "../pages/Login";
import Register from "../pages/Register";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/bargains" element={<Bargains />} />
      <Route path="/bargains/fruits" element={<Fruitspage />} />
      <Route path="/local-market" element={<LocalMarket />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/founders" element={<Founders />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesComponent;
