import React from "react";
import Image from "../assets/image-qr-code.png";

function Header() {
  return (
    <header>
      <img src={Image} alt="QR code" className="rounded-xl" />
      <h1 className="text-xl text-center font-bold text-blue-200 px-5 mt-6 leading-snug">
        Improve your front-end skills by building projects
      </h1>
    </header>
  );
}

export default Header;
