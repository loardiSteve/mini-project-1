// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
import Order from "./pages/order/Order";
import TodoList from "./pages/toDoList/ToDoListPages";
import Products from "./pages/products/productsPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/order" element={<Order />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
