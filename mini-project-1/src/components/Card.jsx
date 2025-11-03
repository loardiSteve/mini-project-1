// src/components/Card.jsx
function Card({ title, image, description, children }) {
  return (
    <div className="w-72 h-[450px] border border-amber-50 rounded-xl text-center flex flex-col justify-between ">
      <img loading="lazy" src={image} alt={title} className="p-2" />
      <h2 className=" font-bold text-xl">{title}</h2>
      <p className="text-lg min-h-14">{description}</p>

      {/* mengambil semua elemen di komponen card pada halaman CardList */}
      <div className="max-h-11 bg-amber-100 px-3 py-1 rounded-xl border border-red-100 hover:bg-green-300 hover:border-blue-100 text-lg font-bold flex justify-center items-center transition-colors duration-300 ease-in-out cursor-pointer *:cursor-pointer">
        {children}
      </div>
    </div>
  );
}

export default Card;
