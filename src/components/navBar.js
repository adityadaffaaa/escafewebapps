const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-4/5 mx-auto py-[18px]">
      <img className="h-[72px]" src="../assets/LOGO ESCAFE.png" alt="" />
      <div className="wrapper bg-background2  px-6 py-2 rounded-[32px]">
        <ul className="flex gap-6 text-text2">
          <li className="active text-secondary">
            <a href="/beranda">Beranda</a>
          </li>
          <li className="hover:text-secondary transition-all ease-in-out duration-200">
            <a href="/menu">Menu</a>
          </li>
          <li className="hover:text-secondary transition-all ease-in-out duration-200">
            <a href="/sobatkopi">Sobat Kopi</a>
          </li>
          <li className="hover:text-secondary transition-all ease-in-out duration-200">
            <a href="/kontak">Kontak</a>
          </li>
          <li className="hover:text-secondary transition-all ease-in-out duration-200">
            <a href="/tentang">Tentang</a>
          </li>
        </ul>
      </div>
      <div className="wrap flex items-center gap-3 ">
        <a className="px-[16px] py-2 border-primary border-2 rounded-[32px] text-primary hover:bg-primary hover:text-text2 transition-all ease-in-out duration-200" href="/signin">
          Sign In
        </a>
        <a className="px-[16px] py-2 bg-primary text-text2 border-2 rounded-[32px] hover:bg-secondary transition-all ease-in-out duration-200" href="/signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
