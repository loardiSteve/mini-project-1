import { useState } from "react";
import OrderItem from "../../components/OrderInput";
import Navbar from "../../components/Navbar";

const Order = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: "Nasi Goreng", quantity: 0, price: 10000 },
    { id: 2, name: "Mie Goreng", quantity: 0, price: 12000 },
  ]);

  const handleCount = (id, action) => {
    //callback func with map
    setOrders((prev) =>
      prev.map((order) => {
        // when id in order state
        if (order.id === id) {
          //value conditioning between sum and minus based action
          const newQty =
            action === "add"
              ? order.quantity + 1
              : Math.max(order.quantity - 1, 0);

          return { ...order, quantity: newQty };
        }
        return order;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pesanan dikirim:", orders);
  };

  const totalAll = orders.reduce((sum, o) => sum + o.quantity * o.price, 0);

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <h1 className="font-bold text-xl my-4">Daftar Menu</h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 justify-center flex-wrap items-center">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} onCount={handleCount} />
        ))}
        <div className=" flex flex-col gap-4">
          <h3 className="font-bold text-lg">Rp. {totalAll}</h3>
          <button
            type="submit"
            className="max-w-24 text-white bg-amber-600 rounded-lg px-3 py-1 hover:bg-rose-100 hover:text-black transition-colors duration-200 ease-in-out cursor-pointer font-semibold">
            Proses Pesanan
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
