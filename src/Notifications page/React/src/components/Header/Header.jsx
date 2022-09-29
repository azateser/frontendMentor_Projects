const Header = ({ readAll, count }) => {
  return (
    <div className="flex items-center justify-between md:py-8 py-5">
      <div className="flex justify-center items-center gap-3">
        <div className="font-extrabold md:text-2xl text-xl">Notifications</div>
        <div className="flex items-center justify-center text-center bg-primary-blue text-white px-3  py-0 rounded-md font-semibold">
          {count}
        </div>
      </div>
      <div
        onClick={readAll}
        className="text-dark-grayish-blue cursor-pointer md:text-base text-sm hover:text-primary-blue transition-all"
      >
        Mark all as read
      </div>
    </div>
  );
};

export default Header;
