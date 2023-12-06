import React, { useState } from "react";
import vector from "../assets/Vector.svg";
import moon from "../assets/moon.svg";
// import ViewTasks from "../pages/viewTask";

const Graph = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" h-full w-full bg-[#FFFFFF99] rounded-[20px] p-[26px]">
      {/* Top section */}
      <div className="flex justify-end">
        {/* Dropdown  */}
        <div className="flex">
          <div className="relative">
            <button
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
              onClick={toggleDropdown}
            >
              <h2>Monthly</h2>
              <img src={vector} alt=""></img>
            </button>

            {isOpen && (
              <div className="absolute w-32 mt-2 origin-top-right shadow-lg">
                <div className="py-1 flex flex-col">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
              onClick={toggleDropdown}
            >
              <div className="flex">
                <img src={moon} alt="" />
                <h2> Overall</h2>
              </div>
              <img src={vector} alt=""></img>
            </button>

            {isOpen && (
              <div className="absolute w-32 mt-2 origin-top-right shadow-lg">
                <div className="py-1 flex flex-col">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <ViewTasks /> */}
    </div>
  );
};

export default Graph;
