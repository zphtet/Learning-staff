const ResourceItem = () => {
  return (
    <div className="group flex gap-5">
      <div className="aspect-square w-[150px] overflow-hidden rounded-lg md:w-[120px]">
        <img src="./assets/man.jpg" alt="man image" />
      </div>
      <div className="flex-1 space-y-3 border-b border-b-black md:space-y-1 md:pb-2">
        <p className="group-hover:text-theme font-bold uppercase">
          29 feb 2024
        </p>
        <h5 className="heading-5 group-hover:text-theme line-clamp-2">
          Streamlining fwd insurance services through digital transformation
        </h5>
        <p className="inline-block rounded-full border border-black px-4 pb-0.5">
          fwd insurance
        </p>
      </div>
    </div>
  );
};

export default ResourceItem;
