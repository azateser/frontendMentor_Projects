import { useState, useEffect } from "react";

import dataJSON from "../data/data.json";

import Notification from "./Notification/Notification";
import Header from "./Header/Header";

const Home = () => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(dataJSON);

  useEffect(() => {
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 1) {
        counter++;
      }
      setCount(counter);
    }
  }, [data]);

  const readAll = () => {
    setData(
      data.map((object) => {
        return { ...object, status: 0 };
      })
    );
  };

  return (
    <div className="flex md:py-16 items-center justify-center bg-very-light-grayish-blue">
      <div className="bg-white shadow-2xl shadow-black/5 lg:w-1/2 md:w-3/4 w-full md:px-8 px-4 rounded-xl">
        <Header readAll={readAll} count={count} />

        <Notification data={data} />
      </div>
    </div>
  );
};

export default Home;
