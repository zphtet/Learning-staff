import Experience from "./sections/experience";
import HorizontalScroll from "./sections/horizontal-scroll";
import Partners from "./sections/partners";
import Reviews from "./sections/reviess";
import SectionTwo from "./sections/section-2";
import Why from "./sections/why";

export default function Home() {
  return (
    <main className="pt-40 md:pt-32">
      <SectionTwo className="ls:py-10 container relative z-20 py-20 md:py-5" />
      <Experience className="ls:translate-y-0 -translate-y-36  pt-0 " />
      <Why className="ls:mt-0 ls:pt-10 -mt-16   pb-20 md:pb-10" />
      <HorizontalScroll />
      <Partners className="py-20 md:py-10" />
      <Reviews className="py-20 md:py-10" />
    </main>
  );
}
