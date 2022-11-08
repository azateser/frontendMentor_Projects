import Header from "./components/Header";
import Main from "./components/Main";
import Bottom from "./components/Bottom";

const App = () => {
  
  return (
    <div className="m-auto md:py-[5.5rem] py-7 xl:px-[10.3rem] lg:px-20 md:px-10 px-4">
    <Header />
    <Main />
    <Bottom />
    </div>
  );
};

export default App;
