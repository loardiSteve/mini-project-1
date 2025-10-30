import Navbar from "../../components/Navbar";
import CardList from "./CardList";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl">Halaman Home</h1>
        <CardList />
      </div>
    </>
  );
}

export default Home;
