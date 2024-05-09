import { twMerge } from "tailwind-merge";
import HireForm from "../components/hire-form";
const SectionTwo = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge("flex items-center ", className)}>
      <div className=" ls:max-w-full max-w-xl space-y-8  md:space-y-4">
        <h3 className="heading-3 *:block ">
          <span>Hire the right</span>
          <span>Frontend Developer</span>
        </h3>

        <p className="para">
          Finding remote tech team has never been easier. Whether you are
          looking for a developer, project manager, or designers, Tech for Hire
          by Codigo will find you the most suitable candidates for what needs to
          be built.
        </p>
      </div>
      <div className="  ls:hidden relative flex-1 ">
        <HireForm className="ml-auto max-w-[360px] " />
      </div>
    </section>
  );
};

export default SectionTwo;
