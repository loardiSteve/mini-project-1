// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
import Order from "./pages/order/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
