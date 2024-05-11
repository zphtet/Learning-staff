import { twMerge } from "tailwind-merge";
import Scroll from "./scroll";
const HorizontalScroll = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge(``, className)}>
      <Scroll dir="left" />
      <Scroll dir="right" />
    </section>
  );
};

export default HorizontalScroll;
