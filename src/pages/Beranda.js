import Navbar from "../components/navBar";
import Hero from "../components/hero";
import SearchBarMenu from "../components/searchBarMenu";
import Kategori from "../components/kategori";
const Beranda = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <SearchBarMenu />
        <Kategori />
      </div>
    </section>
  );
};

export default Beranda;
