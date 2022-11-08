const Bottom = () => {
  return (
    <div className="mt-[4.3rem] grid grid-cols-3 gap-8">
      <div className="col-span-3 grid grid-cols-3 items-center gap-6 md:col-span-1">
        <div className="col-span-1 h-32">
          <img className="h-full w-full" src="./assets/images/image-retro-pcs.jpg" alt="" />
        </div>
        <div className="col-span-2">
          <div className="text-3xl font-bold text-grayish-blue">01</div>
          <div className="mt-2 cursor-pointer text-lg font-bold text-very-dark-blue transition-all hover:text-soft-red">Reviving Retro PCs</div>
          <div className="mt-2 text-base text-dark-grayish-blue">What happens when old PCs are given modern upgrades?</div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 items-center gap-6 md:col-span-1">
        <div className="col-span-1 h-32">
          <img className="h-full w-full" src="./assets/images/image-top-laptops.jpg" alt="" />
        </div>
        <div className="col-span-2">
          <div className="text-3xl font-bold text-grayish-blue">02</div>
          <div className="mt-2 cursor-pointer text-lg font-bold text-very-dark-blue transition-all hover:text-soft-red">Top 10 Laptops of 2022</div>
          <div className="mt-2 text-base text-dark-grayish-blue">Our best picks for various needs and budgets.</div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 items-center gap-6 md:col-span-1">
        <div className="col-span-1 h-32">
          <img className="h-full w-full" src="./assets/images/image-gaming-growth.jpg" alt="" />
        </div>
        <div className="col-span-2">
          <div className="text-3xl font-bold text-grayish-blue">03</div>
          <div className="mt-2 cursor-pointer text-lg font-bold text-very-dark-blue transition-all hover:text-soft-red">The Growth of Gaming</div>
          <div className="mt-2 text-base text-dark-grayish-blue">How the pandemic has sparked fresh opportunities.</div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
