import FadeIn from "./animate/fade-in";

const BannerText = () => {
  return (
    <FadeIn>
      <div className="mx-auto w-[400px] space-y-2 text-center">
        <p className="text-3xl">
          Money can't buy you class.
          <br />
          but it can buy you a vacation
        </p>
        <p className="text-gray-500">
          Check in to the iconic hotels and resorts featured <br /> on The Real
          Housewives.
        </p>
      </div>
    </FadeIn>
  );
};

export default BannerText;
