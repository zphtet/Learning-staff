import { twMerge } from "tailwind-merge";

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

const Scroll = ({ dir }: { dir: "left" | "right" }) => {
  const scroll = {
    left: "animate-scroll-left",
    right: "animate-scroll-right",
  };
  return (
    <div className=" mx-auto  overflow-x-hidden ">
      <div
        className={twMerge(
          `mx-auto flex w-max items-center gap-5  *:w-[200px] md:*:w-[150px]`,
          scroll[dir],
          dir === "right" && "-translate-x-1/2",
        )}
      >
        <img
          src="./assets/h1-1.png"
          //   className="border border-blue-500"
          alt="scroll image"
        />
        <img src="./assets/h1-2.png" alt="scroll image" />
        <img src="./assets/h1-3.png" alt="scroll image" />
        <img src="./assets/h1-4.png" alt="scroll image" />
        <img src="./assets/h1-5.png" alt="scroll image" />
        <img src="./assets/h1-6.png" alt="scroll image" />
        <img src="./assets/h1-7.png" alt="scroll image" />
        <img src="./assets/h1-8.png" alt="scroll image" />
        <img src="./assets/h1-9.png" alt="scroll image" />
        <img src="./assets/h1-10.png" alt="scroll image" />

        <img
          src="./assets/h1-1.png"
          //   className="border border-red-500"
          aria-hidden={true}
          alt="scroll image"
        />
        <img src="./assets/h1-2.png" alt="scroll image" />
        <img src="./assets/h1-3.png" alt="scroll image" />
        <img src="./assets/h1-4.png" alt="scroll image" />
        <img src="./assets/h1-5.png" alt="scroll image" />
        <img src="./assets/h1-6.png" alt="scroll image" />
        <img src="./assets/h1-7.png" alt="scroll image" />
        <img src="./assets/h1-8.png" alt="scroll image" />
        <img src="./assets/h1-9.png" alt="scroll image" />
        <img src="./assets/h1-10.png" alt="scroll image" />
      </div>
    </div>
  );
};

export default Scroll;
