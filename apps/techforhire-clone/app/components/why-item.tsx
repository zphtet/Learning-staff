import { WhyItemType } from "../sections/why";
const WhyItem: React.FC<WhyItemType> = ({ icon, p, t1, t2 }) => {
  return (
    <div className="ls:space-y-4 space-y-6">
      <div className="text-center ">{icon()}</div>
      <h5 className="heading-5">
        {t1} <br />
        {t2}
      </h5>
      <p className="font-sans text-[14px]">{p}</p>
    </div>
  );
};

export default WhyItem;
