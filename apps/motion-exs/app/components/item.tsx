import { StaticImageData } from "next/image";
import { motion } from "motion/react";
const Item: React.FC<{
  imgUrl: string;
  title: string;
  description: string;
  onMouseEnter: (idx: number) => void;
  idx: number;
}> = (item) => {
  console.count("Each Item render");
  return (
    <div
      onMouseEnter={() => item.onMouseEnter(item.idx)}
      className="gal-item group  flex items-center justify-between border-b px-5 py-10"
    >
      <motion.p className="text-5xl transition-all group-hover:translate-x-5">
        {item.title}
      </motion.p>
      <motion.p className="transition-all group-hover:-translate-x-5 group-hover:opacity-50">
        {item.description}
      </motion.p>
    </div>
  );
};

export default Item;
