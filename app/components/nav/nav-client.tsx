"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import LocalSwitcher from "../local-switcher";
import { useLocale } from "next-intl";

const NavClient = ({
  translations,
}: {
  translations: {
    main: string;
    menu: string;
    location: string;
    party: string;
    gallery: string;
  };
}) => {
  const localActive = useLocale();
  const links = [
    { label: translations.main, href: "/" },
    { label: translations.menu, href: "/menu" },
    { label: translations.location, href: "/location" },
    { label: translations.party, href: "/party" },
    { label: translations.gallery, href: "/gallery" },
  ];
  const localeLinks = links.map((link) => ({
    href: `/${localActive}${link.href}`,
    label: link.label,
  }));
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="z-20 fixed w-screen flex items-center justify-between h-[140px]  bg-nav-image bg-cover  ">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex">
            <div className="text-2xl font-bold ml-[20px]   w-[80px] h-[80px]">
              <Image
                src="/logo.jpg"
                width={100}
                height={100}
                alt="logo"
                layout="responsive"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-white ml-4">
              <span className="text-5xl font-serif">TWINS</span>
              <span className="text-xs opacity-70 tracking-widest">
                RESTAURANT
              </span>
            </div>
          </div>
        </Link>
      </div>

      <ul className="hidden lg:flex bg-gold opacity-75 space-x-4 mr-24 pt-0.5 pb-1 px-2 items-center">
        {localeLinks.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer  w-18 font-extrabold  bg-transparent flex rounded"
          >
            <Link href={link.href} legacyBehavior>
              <span className="hover:underline ">{link.label}</span>
            </Link>
          </li>
        ))}
        <LocalSwitcher />
      </ul>
      {/*mobile nav */}
      <div className="lg:hidden  mr-8 z-30" onClick={handleNav}>
        {nav ? (
          <IoMdClose size={30} color="#FFD60A" />
        ) : (
          <GiHamburgerMenu size={30} color="#FFD60A" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed lg:hidden right-0 top-[140px] w-[100%] h-screen z-30   ease-in-out duration-500"
            : "ease-in-out w-[100%] duration-500 fixed  right-0 top-[-100%]"
        }
      >
        {localeLinks.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer  w-18 p-2 bg-gold opacity-80 flex font-bold"
          >
            <Link href={link.href} legacyBehavior>
              <span className="hover:underline ">{link.label}</span>
            </Link>
          </li>
        ))}
        <LocalSwitcher />
      </ul>
    </nav>
  );
};

export default NavClient;
