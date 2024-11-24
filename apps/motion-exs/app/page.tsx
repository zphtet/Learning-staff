import Image from "next/image";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <Gallery />
      <div className="h-[200vh]"></div>
    </div>
  );
}
