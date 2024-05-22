"use client";
import Element from "./menu-element";
import menuData from "./menu-data";
import { MenuTypes } from "./MenuTypes";
import Header from "./menu-header";
import Nav from "./menu-nav";
import Image from "next/image";
import { useState } from "react";
const Menu = () => {
  const [selectedType, setSelectedType] = useState("");
  const handleAllTypes = () => {
    setSelectedType("");
  };
  return (
    <div className="bg-black z-10 text-g flex flex-col justify-center items-center w-full overflow-x-clip  ">
      <Header />
      <div className="fixed lg:sticky right-0 top-[140px] z-10 ">
        <Nav
          setSelectedType={setSelectedType}
          handleAllTypes={handleAllTypes}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center text-white opacity-70 mb-4  ">
        {" "}
        <Image
          src="/leaf.svg"
          width={30}
          height={30}
          alt="leaf"
          className="mr-4"
        />
        <span>Danie wegetariańskie</span>
        <span className="ml-9">Wykaz alergenów dostępny u obsługi</span>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-[50px]  lg:grid-cols-3 ">
        {selectedType
          ? menuData
              .filter((item) => item.type === selectedType)
              .map((item: MenuTypes) => (
                <Element key={item.id} menuData={item} />
              ))
          : menuData.map((item: MenuTypes) => (
              <Element key={item.id} menuData={item} />
            ))}
      </div>
    </div>
  );
};

export default Menu;
