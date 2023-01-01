import React, { useState } from "react";
import ButtonSignIn from "../components/buttonSignIn";
import ButtonSignUp from "../components/buttonSignUp";
import Logo from "../assets/LOGO ESCAFE.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Beranda from "../pages/Beranda";
import Tentang from "../pages/Tentang";

const Navbar = () => {
  const ClassName = ["hover:text-secondary transition-all ease-in-out duration-200"];
  const [show, setShow] = useState(true);
  const ClickMenu = (evt) => {
    evt = setShow(show);
  };
  ClickMenu ? ClassName.push("text-secondary") : ClassName.pop("text-secondary");
  ClassName.map((value) => {
    return value;
  });

  console.log(ClassName);
  return (
    <BrowserRouter>
      <header className="fixed top-0 z-[99999] w-full">
        <nav className="flex justify-between items-center w-4/5 mx-auto py-2">
          <img className="h-[72px]" src={Logo} alt="" />
          <div className="wrapper bg-background2 translate-x-[68px] px-6 py-2 rounded-[32px]">
            <ul className="flex gap-6 text-text2">
              <li className="active text-secondary">
                <Link to="/">Beranda</Link>
              </li>
              <li className={ClassName}>
                <Link to="/menu">Menu</Link>
              </li>
              <li className={ClassName}>
                <Link to="/sobatkopi">Sobat Kopi</Link>
              </li>
              <li className={ClassName}>
                <Link to="/kontak">Kontak</Link>
              </li>
              <li className={ClassName}>
                <Link to="/tentang">Tentang</Link>
              </li>
            </ul>
          </div>
          <div className="wrap flex items-center gap-3 ">
            <ButtonSignIn />
            <ButtonSignUp />
          </div>
        </nav>
      </header>
      <Routes>
        <Route index element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
