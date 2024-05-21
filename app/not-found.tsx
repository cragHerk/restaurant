import Image from "next/image";
export default function NotFound() {
  return (
    <div className="bg-g w-screen h-[calc(100vh-70px)] flex items-center justify-center truncate">
      <Image
        alt="404"
        src={"/er.png"}
        width={500}
        height={500}
        className="pt-[100px]"
      />
    </div>
  );
}
