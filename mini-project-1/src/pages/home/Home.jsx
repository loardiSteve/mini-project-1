import Navbar from "../../components/Navbar";
import CardList from "./CardList";

function Home() {
  return (
    <div className="px-6">
      <Navbar />
      <div>
        <h1 className="text-3xl mb-5">Halaman Home</h1>
        <CardList />
      </div>
    </div>
  );
}

export default Home;
