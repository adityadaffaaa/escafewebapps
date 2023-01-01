import React from "react";
import ButtonKirim from "../components/buttonKirim";
const KritikSaran = () => {
  return (
    <div className="flex flex-col items-center mt-[42px] gap-[46px]">
      <div className="flex flex-col items-center ">
        <h3 className="text-secondary text-heading3">Anda memiliki kritik dan saran?</h3>
        <p className="text-text3 text-paragraph2">Kirim pesan dibawah ini</p>
      </div>
      {Form()}
    </div>
  );
};

export default KritikSaran;

const Form = () => {
  return (
    <form action="" method="">
      <div className="flex flex-col gap-6 items-end">
        <input className="px-6 py-[10px] w-[516px] border-2 border-secondary rounded-[32px] placeholder:text-paragraph2 placeholder:text-text3" type="text" name="nama" value="" placeholder="Nama" />
        <input className="px-6 py-[10px] w-[516px] border-2 border-secondary rounded-[32px] placeholder:text-paragraph2 placeholder:text-text3" type="email" name="nama" value="" placeholder="Email" />
        <input className="w-[516px] h-[200px] px-6 border-2 border-secondary rounded-[32px] placeholder:text-paragraph2 placeholder:text-text3" type="textarea" name="" value="" placeholder="Pesan" />
        <div className="wrapbtn ">{ButtonKirim()}</div>
      </div>
    </form>
  );
};
