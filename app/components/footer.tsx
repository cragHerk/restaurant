import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-footer-image text-white w-full h-[70px] flex items-center ">
      <div className="flex justify-start items-center ml-8 ">
        {" "}
        <a
          className="mr-2"
          href="https://www.facebook.com/"
          aria-label="facebook"
        >
          <LiaFacebookSquare size={30} color="#ffdd33" />
        </a>
        <a href="https://www.instagram.com/" aria-label="instagram">
          {" "}
          <LiaInstagram size={30} color="#ffdd33" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
