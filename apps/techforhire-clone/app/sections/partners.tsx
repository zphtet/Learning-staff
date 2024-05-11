import { twMerge } from "tailwind-merge";
import Button from "../components/button";
import ResourceItem from "../components/res-item";

const Partners = ({ className }: { className?: string }) => {
  return (
    <section
      className={twMerge(`container flex md:flex-col md:gap-10`, className)}
    >
      <div className="flex-1">
        <div className="w-[90%] space-y-6 md:w-[100%] md:space-y-4">
          <p className="text-theme text-xl font-extrabold uppercase">
            Partners
          </p>
          <h3 className="heading-3 leading-none">
            Trusted <br /> Partnerships, <br /> Global Reach
          </h3>
          <p className="para">
            Join a community of leading brands that have already chosen Codigo
            for their tech needs. Our clientele showcases the diverse and global
            impact of our expertise, and we're proud to be the backbone of their
            success.
          </p>
          <p className="para">Let's shape the future, together.</p>

          <div className="pt-5">
            <Button text="Contact us" className="btn " />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-6 ">
        <ResourceItem />
        <ResourceItem />
        <ResourceItem />
      </div>
    </section>
  );
};

export default Partners;
