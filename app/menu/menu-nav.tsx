import Image from "next/image";
type SetSelectedType = (type: string) => void;
type HandleAllTypes = () => void;
const Nav = ({
  setSelectedType,
  handleAllTypes,
}: {
  setSelectedType: SetSelectedType;
  handleAllTypes: HandleAllTypes;
}) => {
  return (
    <div className="rounded bg-g sm:p-2 mb-4 flex-col lg:flex lg:flex-row">
      <a onClick={handleAllTypes}>
        <Image
          className=" p-1 lg:mx-2 my-2 lg:my-0 cursor-pointer sm:border sm:border-black sm:rounded-sm"
          src="/menu/nav/all.svg"
          width={35}
          height={35}
          alt="all"
        />{" "}
      </a>
      <a onClick={() => setSelectedType("food")}>
        <Image
          className=" p-1 lg:mx-2 my-2 lg:my-0 cursor-pointer sm:border sm:border-black sm:rounded-sm"
          src="/menu/nav/food.svg"
          width={35}
          height={35}
          alt="food"
        />{" "}
      </a>
      <a onClick={() => setSelectedType("drink")}>
        <Image
          className=" p-1 lg:mx-2 my-2 lg:my-0 cursor-pointer sm:border sm:border-black sm:rounded-sm"
          src="/menu/nav/drink.svg"
          width={35}
          height={35}
          alt="drink"
        />{" "}
      </a>
      <a onClick={() => setSelectedType("alcohol")}>
        <Image
          className=" p-1 lg:mx-2 my-2 lg:my-0 cursor-pointer sm:border sm:border-black sm:rounded-sm"
          src="/menu/nav/alco.svg"
          width={35}
          height={35}
          alt="alcohol"
        />{" "}
      </a>
      <a onClick={() => setSelectedType("beer")}>
        <Image
          className=" p-1 lg:mx-2 my-2 lg:my-0 cursor-pointer sm:border sm:border-black sm:rounded-sm"
          src="/menu/nav/beer.svg"
          width={35}
          height={35}
          alt="beer"
        />{" "}
      </a>
      <a onClick={() => setSelectedType("wine")}>
        <Image
          className=" p-1 lg:mx-2 my-2 lg:my-0 cursor-pointer sm:border sm:border-black sm:rounded-sm"
          src="/menu/nav/wine.svg"
          width={35}
          height={35}
          alt="wine"
        />{" "}
      </a>
      <a onClick={() => setSelectedType("pizza")}>
        <Image
          className=" p-1 lg:mx-2 my-2 lg:my-0 cursor-pointer sm:border sm:border-black sm:rounded-sm"
          src="/menu/nav/pizza.svg"
          width={35}
          height={35}
          alt="pizza"
        />{" "}
      </a>
    </div>
  );
};

export default Nav;
