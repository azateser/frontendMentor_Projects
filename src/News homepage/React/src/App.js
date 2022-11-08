import Header from "./components/Header";
import Main from "./components/Main";
import Bottom from "./components/Bottom";

const App = () => {
  return (
    <div className="m-auto bg-off-white py-7 px-4 md:py-[5.5rem] md:px-10 lg:px-20 xl:px-[10.3rem]">
      <Header />
      <Main />
      <Bottom />
    </div>
  );
};

export default App;
