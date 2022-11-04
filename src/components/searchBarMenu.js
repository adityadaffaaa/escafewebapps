const SearchBarMenu = () => {
  return (
    <div className="flex justify-center mt-[106px]">
      <div className="flex justify-between items-center w-[1140px]">
        <h3 className="text-secondary text-heading3">Menu</h3>
        <div className="flex flex-row items-center gap-6">
          <form action="" method="">
            <input className="px-6 py-[10px] w-[330px] rounded-[32px] border-2 border-secondary placeholder:text-paragraph2 placeholder:text-text3" type="text" name="cari" value="" placeholder="Cari menu..." />
          </form>
          <span className="cursor-pointer filter">
            <svg className="fill-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4h18zM6.404 6L11 12.894V20h2v-7.106L17.596 6H6.404z" />
            </svg>
          </span>
          <span className="cursor-pointer bag">
            <svg className="fill-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBarMenu;
