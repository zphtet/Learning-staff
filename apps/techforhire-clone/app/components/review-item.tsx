import { ReviewType } from "../sections/reviess";

const ReviewItem: React.FC<ReviewType> = ({ author, p, position }) => {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-center">
      <p className="text-theme font-sans text-4xl md:text-2xl">{p}</p>
      <div>
        <p className="font-extrabold uppercase">{author}</p>
        <p className="font-sans text-xs">{position}</p>
      </div>
    </div>
  );
};
export default ReviewItem;
