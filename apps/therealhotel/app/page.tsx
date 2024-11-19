import Banner from "@/components/banner";
import ExploreMap from "@/components/explore-map";
import InTheWild from "@/components/in-the-wild";
import Stacks from "@/components/stacks";
import StayInTheKnow from "@/components/stay-in-known";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <ExploreMap />
      <div className="min-h-[60vh] py-36">
        <InTheWild text="In The Wild" />
      </div>
      <Stacks />
      <div className="py-36">
        <StayInTheKnow text="Stay In The Know" />
        <p className="text-center">
          Be the first to know about new hotels we’ve uncovered
        </p>
      </div>
      {/* <div className="h-[100vh]"></div> */}
    </div>
  );
}
