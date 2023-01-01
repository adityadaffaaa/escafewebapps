import Hero from "../berandaBody/hero";
import SearchBarMenu from "../berandaBody/searchBarMenu";
import Kategori from "../berandaBody/kategori";
import Menu from "../berandaBody/menu";
import SobatKopi from "../berandaBody/sobatKopi";
import KritikSaran from "../berandaBody/kritikSaran";
import Footer from "../parts/footer";

const Beranda = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Hero />
        <SearchBarMenu />
        <Kategori />
        <Menu />
        <SobatKopi />
        <KritikSaran />
      </div>
      <Footer />
    </section>
  );
};

export default Beranda;
