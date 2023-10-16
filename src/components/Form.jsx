import React from "react";

function Form({ onSubmit }) {
  return (
    <div className=" absolute w-screen inset-x-0 h-screen bg-gray-800 bg-opacity-50 z-10">
      <div className=" bg-gray-300 p-10  relative top-64 left-1/4 w-2/4 rounded-3xl">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-20 ">
            <label
              htmlFor="large-input"
              className="block mb-2 text-lg font-medium pl-1 text-gray-900 "
            >
              Large input
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md  dark:bg-gray-100 "
            />
            <button className="bg-button float-right mt-10" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
