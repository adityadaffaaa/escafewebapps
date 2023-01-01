import React from "react";
import galeri1 from "../assets/galeri1.png";
import galeri2 from "../assets/galeri2.png";
import galeri3 from "../assets/galeri3.png";
import galeri4 from "../assets/galeri4.png";
import galeri5 from "../assets/galeri5.png";
import galeri6 from "../assets/galeri6.png";

const GaleriList1 = [galeri1, galeri2, galeri3];
const GaleriList2 = [galeri4, galeri5, galeri6];

const Galeri = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-secondary text-heading1 text-center">Gallery</h1>
        <div className="flex flex-col overflow-hidden rounded-[32px]">
          <div className="flex flex-row">
            {GaleriList1.map((img) => {
              return <img className="h-[270px]" src={img} alt="" />;
            })}
          </div>
          <div className="flex flex-row">
            {GaleriList2.map((img) => {
              return <img className="h-[270px]" src={img} alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
