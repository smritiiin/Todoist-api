import React from 'react'
import search from "../assets/search.svg";

const Search = () => {
  return (
    <div>
      {/* Search Bar */}
      <div className=" bg-white rounded-[20px] h-10 p-2.5 flex gap-x-3 mb-7">
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search here"
          className=" w-full"
        ></input>
      </div>
    </div>
  );
}

export default Search