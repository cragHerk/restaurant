import Image from "next/image";
import { MenuTypes } from "./MenuTypes";
import { useLocale } from "next-intl";

const Element = ({ menuData }: { menuData: MenuTypes }) => {
  const localActive = useLocale();

  return (
    <div id={menuData.id} className="flex flex-col w-[320px]">
      <div className="w-[320px] h-[1px] bg-g my-2"></div>
      <h2 className="text-3xl font-bold font-serif py-2">
        {menuData.category}
      </h2>
      <div className="w-[320px] h-[1px] bg-g my-2"></div>
      {menuData.burgerDescription && (
        <span className="text-white text-xs opacity-70 text-balance">
          {menuData.burgerDescription}
        </span>
      )}
      <div className="relative px-1">
        {menuData.items.map((item, index) => (
          <>
            {item.type && (
              <>
                <h2 className="text-2xl text-white font-bold py-2">
                  {item.type}
                </h2>
                <div className="w-[320px] h-[1px] bg-g my-2"></div>
              </>
            )}

            <div className="flex justify-between relative p-1">
              {item.name && (
                <h3 className="text-xl  font-bold text-white flex flex-col">
                  {item.name}
                  {item.header && (
                    <span className="text-sm">{item.header}</span>
                  )}
                </h3>
              )}
              {item.glassSize && (
                <div>
                  <span className="text-white mx-1">{item.glassSize}</span>
                  <span>{item.glass}</span>
                </div>
              )}
              <span>
                {item.price}
                {item.bottle && (
                  <span className="text-white"> {item.bottle}</span>
                )}
              </span>
              {item.image && (
                <Image
                  src={item.image}
                  width={30}
                  height={30}
                  alt={item.image}
                  className="absolute top-[10px] right-[100px]"
                />
              )}
              {item.vege && (
                <Image
                  src="/leaf.svg"
                  width={30}
                  height={30}
                  alt="leaf"
                  className="absolute top-[5px] left-[-32px]"
                />
              )}
            </div>

            {item.description && (
              <span className="text-white text-xs opacity-70 text-balance  ">
                {item.description[localActive]}
              </span>
            )}
            {item.description1 && (
              <div className="flex justify-between ">
                <span className="text-white text-xs opacity-70">
                  {item.description1}
                </span>
                <span>{item.price1}</span>
              </div>
            )}
            {item.description2 && (
              <div className="flex justify-between ">
                <span className="text-white text-xs opacity-70">
                  {item.description2}
                </span>
                <span>{item.price2}</span>
              </div>
            )}
            {item.description3 && (
              <div className="flex justify-between ">
                <span className="text-white text-xs opacity-70">
                  {item.description3}
                </span>
                <span>{item.price3}</span>
              </div>
            )}
            {item.description4 && (
              <div className="flex justify-between ">
                <span className="text-white text-xs opacity-70">
                  {item.description4}
                </span>
                <span>{item.price4}</span>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Element;
