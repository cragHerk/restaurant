"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const links = [
  { label: "STRONA GŁÓWNA", href: "/" },
  { label: "MENU", href: "/menu" },
  { label: "O NAS", href: "/aboutus" },
  { label: "LOKALIZACJA", href: "/location" },
  { label: "REZERWACJA", href: "/contact" },
];
const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="z-10 fixed w-screen flex items-center justify-between h-[140px]  bg-nav-image  ">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-white p-4">LOGO</span>
        </Link>
      </div>

      <ul className="hidden md:flex bg-gold opacity-75 space-x-4 mr-24 pt-0.5 pb-1 px-2">
        {links.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer  w-18 font-extrabold  bg-transparent flex rounded"
          >
            <Link href={link.href} legacyBehavior>
              <span className="hover:underline ">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/*mobile nav */}
      <div className="md:hidden  mr-8 z-10" onClick={handleNav}>
        {nav ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-[90px] w-[100%] h-screen   ease-in-out duration-500"
            : "ease-in-out w-[100%] duration-500 fixed  right-0 top-[-100%]"
        }
      >
        {links.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer  w-18 p-2 bg-gold flex font-bold"
          >
            <Link href={link.href} legacyBehavior>
              <span className="hover:underline ">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
