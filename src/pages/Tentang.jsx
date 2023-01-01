import React from "react";
import Deskripsi from "../tentangBody/deskripsiTentang";
import HeroTentang from "../tentangBody/heroTentang";
import Faq from "../tentangBody/faq";
import Galeri from "../tentangBody/galeri";
import Footer from "../parts/footer";
const Tentang = () => {
  return (
    <section className="">
      <HeroTentang />
      <Deskripsi />
      <Faq />
      <Galeri />
      <Footer />
    </section>
  );
};

export default Tentang;
