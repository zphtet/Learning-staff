import Mask from "./_components/mask";

const Page = () => {
  return (
    <div className="min-h-[100vh] w-full bg-white">
      <div className="flex h-screen items-center justify-center">
        <p className="max-w-96 text-2xl text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          nesciunt voluptatibus sunt doloribus aliquam odit aut officia quaerat!
          Quo, earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quos nesciunt voluptatibus sunt doloribus aliquam odit aut officia
          quaerat! Quo, earum!
        </p>
      </div>
      <Mask />
      <div className="h-screen"></div>
    </div>
  );
};

export default Page;
