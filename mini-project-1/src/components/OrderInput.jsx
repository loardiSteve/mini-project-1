const OrderInput = ({ order, onCount }) => {
  return (
    <div className="mb-4 flex flex-col gap-3 border border-amber-50 rounded-lg bg-blue-50 hover:bg-red-50 p-4 ">
      <h2 className="font-semibold text-lg ">{order.name}</h2>
      <p className="text-lg font-normal">Harga: Rp{order.price}</p>

      <div className="flex gap-2 justify-center ">
        <button
          type="button"
          onClick={() => onCount(order.id, "min")}
          className="max-w-24 text-white bg-amber-600 rounded-lg px-3 py-1 hover:bg-rose-100 hover:text-black transition-colors duration-200 ease-in-out cursor-pointer font-semibold">
          -
        </button>
        <span className="mx-2 my-2">{order.quantity}</span>
        <button
          type="button"
          onClick={() => onCount(order.id, "add")}
          className="max-w-24 text-white bg-amber-600 rounded-lg px-3 py-1 hover:bg-rose-100 hover:text-black transition-colors duration-200 ease-in-out cursor-pointer font-semibold">
          +
        </button>
      </div>

      <p>Total: Rp{order.quantity * order.price}</p>
    </div>
  );
};

export default OrderInput;
