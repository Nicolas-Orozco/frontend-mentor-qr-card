import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 font-sans p-1 text-black md:text-base text-sm text-center">
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="text-blue-600 font-bold underline"
        rel="noreferrer"
      >
        Frontend Mentor.
      </a>{" "}
      Coded by
      <a
        href="https://github.com/Nicolas-Orozco"
        className="text-orange-600 font-bold underline"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Nicolas Orozco.
      </a>
    </footer>
  );
}

export default Footer;
