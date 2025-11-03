// src/pages/CardList.jsx
import Card from "../../components/Card";
import { profiles } from "../../data/data";

function CardList() {
  return (
    <>
      <h1 className="text-xl font-bold mx-auto text-center pb-12">
        Koleksi Kartu Profesi
      </h1>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-3 *:border *:border-black *:shadow-2xl *:p-4 *:rounded-2xl *:hover:bg-amber-50 *:transition-colors *:duration-300 *:ease-in">
        {profiles.map((profile, idx) => (
          <Card
            key={idx}
            title={profile.title}
            image={profile.image}
            description={profile.description}>
            {/* ini adalah children yang dipanggil di komponen card */}
            <button>Lihat Detail</button>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-3 *:border *:border-black *:shadow-2xl *:p-4 *:rounded-2xl *:hover:bg-amber-50 *:transition-colors *:duration-300 *:ease-in">
        {/* mengirim props title, image, description ke komponen Card */}
      </div>
    </>
  );
}

export default CardList;
