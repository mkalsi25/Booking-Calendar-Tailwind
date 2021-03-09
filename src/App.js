//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import BookingCalendar from "./components/BookingCalendar";
import result from "./result.json";
//import Charts from "./components/Charts";
function App() {
  const [load, setLoad] = useState(0);
  const [menu, setMenu] = useState(true);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const OnMenu = () => {
    setMenu((menu) => !menu);
  };

  const prev = () => {
    setLoad(load - 1);
  };
  const next = () => {
    setLoad(load + 1);
  };
  return (
    <div className="grid items-stretch overflow-hidden">
      <div className="absolute z-10 m-4">
        <button
          className=" uppercase tracking-widest text-xs p-4 bg-gray-200 outline-none focus:outline-none rounded font-bold"
          onClick={OnMenu}
        >
          Menu
        </button>
      </div>
      <div
        className={
          menu
            ? "col-start-1 row-start-1 relative z-20 self-start uppercase font-bold tracking-widest flex items-center space-x-2 p-4 invisible"
            : "visible col-start-1 row-start-1 relative z-20 self-start uppercase font-bold tracking-widest flex items-center space-x-2 p-4"
        }
      >
        <div className="bg-gray-300  px-6 py-4 rounded shadow-xl grid">
          <span className="text-mobile">Name</span>
          {result[0].name}
        </div>
        <div className="bg-gray-300  p-4 rounded shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 11.871l-5-4.871v3h-19v4h19v3z" />
          </svg>
        </div>
        <div className="bg-gray-300  p-4 rounded shadow-xl grid">
          <span className="text-mobile">Month</span>
          {months[load]}
        </div>
      </div>
      <BookingCalendar result={result} load={load} />
      <div className="max-w-7xl w-11/12 md:w-full mx-auto flex self-center justify-between col-start-1 row-start-1 relative z-10 text-xs font-bold">
        <div>
          {load > 0 && (
            <button
              onClick={prev}
              className="outline-none uppercase font-bold tracking-widest focus:outline-none px-4 py-2 rounded bg-gray-300 hover:shadow-xl transition duration-200 ease-in-out"
            >
              Previous
            </button>
          )}
        </div>
        <div>
          {load < 11 && (
            <button
              onClick={next}
              className="outline-none uppercase font-bold tracking-widest focus:outline-none px-4 py-2 rounded bg-gray-300 hover:shadow-xl transition duration-200 ease-in-out"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
