// src/pages/CardList.jsx
import Card from "../../components/Card";

function CardList() {
  return (
    <>
      <h1 className="text-7xl font-bold mx-auto text-center pb-12">
        Koleksi Kartu Profesi
      </h1>
      <div className="flex justify-center gap-3 *:border *:border-black *:shadow-2xl *:p-4 *:rounded-2xl *:hover:bg-amber-50 *:transition-colors *:duration-300 *:ease-in">
        {/* mengirim props title, image, description ke komponen Card */}
        <Card
          title="Web Developer"
          image="https://via.placeholder.com/150"
          description="Membangun antarmuka modern dengan React.">
          <button>Lihat Detail</button>
        </Card>

        <Card
          title="UI Designer"
          image="https://via.placeholder.com/150"
          description="Mendesain tampilan yang enak dilihat dan intuitif.">
          <button>Hubungi</button>
        </Card>

        <Card
          title="Network Engineer"
          image="https://via.placeholder.com/150"
          description="Menangani jaringan dan keamanan sistem.">
          <span>Active</span>
        </Card>
      </div>
    </>
  );
}

export default CardList;
