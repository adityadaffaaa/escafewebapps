const Kategori = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h3 className="text-secondary text-heading3">Kategori</h3>
      <div className="flex flex-row bg-primary rounded-[32px] overflow-hidden mt-3 gap-4">
        <div className="text-text2 text-paragraph2 px-6 py-2 bg-secondary rounded-[32px] cursor-pointer">Kopi</div>
        <div className="text-text2 text-paragraph2 px-6 py-2 rounded-[32px] hover:bg-[#7E2D2C] transition-all ease-in-out duration-200 cursor-pointer">Non Kopi</div>
        <div className="text-text2 text-paragraph2 px-6 py-2 rounded-[32px] hover:bg-[#7E2D2C] transition-all ease-in-out duration-200 cursor-pointer">Makanan</div>
      </div>
    </div>
  );
};
export default Kategori;
