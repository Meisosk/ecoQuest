import { useState, useEffect } from "react";

const SearchBar = (props) => {
  //   const [input, setInput] = useState("");
  //   const [Cities, setCities] = useState([]);
  //   const [chosenCity, setChosenCity] = useState("new york");

  //   useEffect(() => {
  //     setChosenCity(props.city);
  //   }, [props.city]);

  //   useEffect(() => {
  //     setCities(cities);
  //   }, []);

  //   const handleInputChange = (e) => {
  //     const inputValue = e.target.value;
  //     setInput(inputValue);

  //     const filteredCitites = cities.filter((city) =>
  //       city.toLowerCase().includes(inputValue.toLowerCase())
  //     );

  //     setCities(filteredCitites);
  //   };

  //   const handleSubmit = async () => {
  //     if (input !== "") {
  //       setChosenCity(input);
  //       setInput("");
  //     }
  //   };

  //   const topFour = Cities.slice(0, 4);

  return (
    <>
      <div className="m-5 flex justify-center">
        <div className="submit-area">
          <div className="felx ">
            <input
              className="p-3 w-60"
              type="text"
              //   value={input}
              //   onChange={handleInputChange}
              placeholder="Enter city or state name..."
            />

            <button className=" h-12 bg-amber-500" type="submit">
              Submit
            </button>
          </div>
          {/* <div className="search-result-container">
            {topFour.map((res, index) => {
              return (
                <div
                  key={index}
                  className={`${input === "" ? "hidden" : "search-result"}`}
                  onClick={() => setInput(res)}
                >
                  {res}
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
