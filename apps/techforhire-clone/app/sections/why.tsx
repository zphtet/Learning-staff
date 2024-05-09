import { twMerge } from "tailwind-merge";
import WhyItem from "../components/why-item";
import { DollarSign, Focus, Ham, Laugh } from "lucide-react";
import WhyTitle from "../components/why-ttl";

const datas = [
  {
    t1: "Scale Up, Scale Down,",
    t2: "We're Your Ground",
    icon: () => <Laugh size={100} className="ls:w-[75px] ls:h-[75px]" />,
    p: "All team sizes from a one man team to a 50-man strong powerhouse can be set up within our premises. We’ll do all it takes to accomodate your needs and requirements.",
  },
  {
    t1: "Premium Talent,",
    t2: "Pocket-friendly Prices",
    icon: () => <DollarSign size={100} className="ls:w-[75px] ls:h-[75px]" />,
    p: "Spend wisely on tech hires. Our services focus on regions with skilled talent and lower living costs, stretching your budget further to help foster your product's development.",
  },

  {
    t1: "Tailor-Made Talent,",
    t2: "Just for You",
    icon: () => <Focus size={100} className="ls:w-[75px] ls:h-[75px]" />,
    p: "We find candidates who fit YOUR needs, not ours. We dive deep into understanding your requirements before recruiting the right talents.",
  },
  {
    t1: "Payroll? Perks?",
    t2: "We've Got You Covered",
    icon: () => <Ham size={100} className="ls:w-[75px] ls:h-[75px]" />,
    p: "Leave the fuss of payroll and benefits to us. We handle all the backend work, letting you focus on business growth.",
  },
];

type Datas = typeof datas;

export type WhyItemType = Datas[0];

const Why = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge(`container`, className)}>
      <div className="ls:space-y-6 max-w-2xl  space-y-10 border md:space-y-6">
        <h5 className="text-theme text-xl font-bold uppercase">
          Why Tech for hire by codigo
        </h5>
        <p className="para">
          With Tech for Hire by Codigo, skip the hassle of paperwork and
          ill-fitted candidates. Experience customised matches that prioritise
          smooth communication and fit your project perfectly.
        </p>

        <p className="para">
          Say goodbye to long vacancies, unexpected costs, and compatibility
          issues. We are here to simplify and redefine your hiring journey.
        </p>
      </div>

      <div className=" ls:grid-cols-2 grid grid-cols-4 gap-5 py-14 md:!grid-cols-1 ">
        {datas.map((item, idx) => (
          <WhyItem key={idx} {...item} />
        ))}
      </div>
      <div className="ls:py-8 mx-auto max-w-[760px] py-14">
        <WhyTitle />
      </div>
    </section>
  );
};

export default Why;
