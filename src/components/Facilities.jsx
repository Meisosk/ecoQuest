import React from "react";
import SearchBar from "./SearchBar";

function Facilities() {
  return (
    <div className=" w-full h-full">
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-col w-full h-full ">
        <div className="h-1/6 w-3/4 mb-1.7 ml-1.7">
          <div className="bg-primary h-full w-full rounded-3xl p-5 ">
            <p>Name: AES Warrior Run</p>
            <p>GHG QUANTITY (METRIC TONS CO2e): 1406157</p>
            <p>Location: CUMBERLAND, MD</p>
          </div>
        </div>
        <div className="flex h-1/6 w-3/4 mb-1.7 ml-1.7">
          <div className="bg-primary h-full w-full rounded-3xl p-5">
            <p>Name: AES Warrior Run</p>
            <p>GHG QUANTITY (METRIC TONS CO2e): 1406157</p>
            <p>Location: CUMBERLAND, MD</p>
          </div>
        </div>
        <div className="flex h-1/6 w-3/4 mb-1.7 ml-1.7">
          <div className="bg-primary h-full w-full rounded-3xl p-5">
            <p>Name: AES Warrior Run</p>
            <p>GHG QUANTITY (METRIC TONS CO2e): 1406157</p>
            <p>Location: CUMBERLAND, MD</p>
          </div>
        </div>
        <div className="flex h-1/6 w-3/4 mb-1.7 ml-1.7">
          <div className="bg-primary h-full w-full rounded-3xl p-5">
            <p>Name: AES Warrior Run</p>
            <p>GHG QUANTITY (METRIC TONS CO2e): 1406157</p>
            <p>Location: CUMBERLAND, MD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
