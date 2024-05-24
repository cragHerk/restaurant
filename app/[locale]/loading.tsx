import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="bg-transparent w-screen h-screen flex items-center justify-center">
      <FadeLoader color="black" aria-setsize={50} />
    </div>
  );
}
