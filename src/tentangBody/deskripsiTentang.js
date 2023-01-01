import React from "react";
import ImgDeskripsi1 from "../assets/Deskripsi 1.png";
import ImgDeskripsi2 from "../assets/Deskripsi 2.png";

const Deskripsi = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] gap-20">
      <div className="flex flex-row items-center gap-[96px]">
        <img className="h-[550px] rounded-[32px]" src={ImgDeskripsi1} alt="" />
        <div className="flex flex-col gap-3">
          <h4 className="text-heading4 text-secondary">Apasih Smart Cafe?</h4>
          <p className="text-paragraph2 text-text4 w-[580px]">
            Smart Cafe adalah cafe yang berbasis IOT, Fintech serta E-commerce. ESCAFE menerapkan E-commerce berbentuk website untuk setiap transaksi di cafe ini dan mempunyai robot sederhana yang dioptimalisasi untuk mengantar makanan dan
            minuman ke pelanggan yang akan memberikan pengalaman baru ngopi di cafe.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-[70px] items-center">
        <div className="flex flex-col gap-3">
          <h4 className="text-heading4 text-secondary">Apa Yang Membuat Kopi Kita Spesial ?</h4>
          <p className="text-paragraph2 text-text4 w-[585px]">
            Biji kopi segar pilihan terbaik yang di dapat dari petani kopi dampit. Salah satu inovasi kopi robusta dampit yang dipadukan dengan buah apel khas malang. Kopi robusta dari dampit yang rasanya dianggap paling enak oleh para
            penikmat kopi. Pesan dan rasakan kenikmatan rasa serta aromanya.
          </p>
        </div>
        <img className="h-[470px] rounded-[32px]" src={ImgDeskripsi2} alt="" />
      </div>
    </div>
  );
};

export default Deskripsi;
