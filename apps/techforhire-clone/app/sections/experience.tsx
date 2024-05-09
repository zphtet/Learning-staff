import { twMerge } from "tailwind-merge";

const Experience = ({ className }: { className?: string }) => {
  return (
    <section
      className={twMerge(
        `exp-container  relative overflow-x-hidden  `,
        className,
      )}
    >
      <div className="container absolute bottom-1/2 left-1/2 z-10 -translate-x-1/2 translate-y-[calc(50%+100px)] ">
        <h4 className=" text-5xl font-extrabold uppercase leading-none text-white *:block md:text-3xl">
          <span> 13 Years of experience.</span>
          <span>Countless Connections.</span>
          <span>Zero Compromises.</span>
        </h4>
      </div>

      <div className="carousel-container animate-scroll ls:w-[5000px] flex w-[6000px] max-w-max gap-5 *:inline-block sm:w-[4000px]  ">
        <div className="">
          <img src="./assets/exp-1.png" alt="experience one image" />
        </div>

        <div>
          <img src="./assets/exp-2.png" alt="experience two image" />
        </div>

        <div>
          <img
            src="./assets/exp-3.png"
            className=""
            alt="experience thre image"
          />
        </div>
        <div>
          <img
            src="./assets/exp-4.png"
            className=""
            alt="experience four image"
          />
        </div>
        <div>
          <img
            src="./assets/exp-5.png"
            className=""
            alt="experience five image"
          />
        </div>

        {/* second loop */}
        <div className="">
          <img src="./assets/exp-1.png" alt="experience one image" />
        </div>

        <div>
          <img src="./assets/exp-2.png" alt="experience two image" />
        </div>

        <div>
          <img
            src="./assets/exp-3.png"
            className=""
            alt="experience thre image"
          />
        </div>
        <div>
          <img
            src="./assets/exp-4.png"
            className=""
            alt="experience four image"
          />
        </div>
        <div>
          <img
            src="./assets/exp-5.png"
            className=""
            alt="experience five image"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
