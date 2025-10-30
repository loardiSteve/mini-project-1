// src/components/Card.jsx
function Card({ title, image, description, children }) {
  return (
    <div className="w-[200px] p-4 border border-amber-50 rounded-xl text-center">
      <img src={image} alt={title} className="w-full p-2" />
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>

      {/* mengambil semua elemen di komponen card pada halaman CardList */}
      <div className="card-extra">{children}</div>
    </div>
  );
}

export default Card;
