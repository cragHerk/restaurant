"use client";
import Element from "./menu-element";
import menuData from "./menu-data";
import { MenuTypes } from "./MenuTypes";
import Header from "./menu-header";
import Nav from "./menu-nav";
import Top from "./menu-top";
import { useState } from "react";
const Menu = ({ translations }: any) => {
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

      <Top translations={translations} />
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
