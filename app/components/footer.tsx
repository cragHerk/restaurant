import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-footer-image text-white w-full h-[70px] flex items-center z-10 relative pl-5 justify-between">
      {" "}
      <div className="flex">
        {" "}
        <a
          className="mr-2"
          href="https://www.facebook.com/people/Twins-Restaurant/100083409545578/"
          aria-label="facebook"
        >
          <LiaFacebookSquare size={30} color="#ffdd33" />
        </a>
        <a
          href="https://www.instagram.com/twins_restaurant_zator/"
          aria-label="instagram"
        >
          {" "}
          <LiaInstagram size={30} color="#ffdd33" />
        </a>
      </div>
      <a className="mr-5" href="http://www.freepik.com">
        Designed by Layerace / Freepik
      </a>
    </footer>
  );
};

export default Footer;
