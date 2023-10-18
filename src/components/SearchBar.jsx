import { useState, useEffect } from "react";
import { dataFetchingFunctions } from "../GetTables";
const { GetCities } = dataFetchingFunctions;

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [Cities, setCities] = useState([]);
  const [Filtered, setFiltered] = useState([]);
  const [chosenCity, setChosenCity] = useState("new york");

  useEffect(() => {
    console.log(Filtered);
  }, [Filtered]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await GetCities();
        setCities(
          cities.map(
            (city) =>
              city.CityName.charAt(0).toUpperCase() +
              city.CityName.slice(1).toLowerCase()
          )
        );
        setFiltered(
          cities.map(
            (city) =>
              city.CityName.charAt(0).toUpperCase() +
              city.CityName.slice(1).toLowerCase()
          )
        );
      } catch (error) {
        console.error("Error fetching cities: ", error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const chosenCityLower = chosenCity.toLowerCase();
    const filteredResults = props.data.filter((facility) =>
      facility.CityName.toLowerCase().includes(chosenCityLower)
    );
    props.onFilterResults(filteredResults);
  }, [chosenCity]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    console.log(input);
    const filteredCitites = Cities.filter((city) =>
      city.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFiltered(filteredCitites);
  };

  const handleSubmit = async () => {
    if (input !== "") {
      setChosenCity(input);
      setInput("");
      setFiltered(Cities);
    }
  };

  const topFour = Filtered.slice(0, 4);

  return (
    <>
      <div className="m-5 flex justify-center">
        <div className="submit-area">
          <div className="felx ">
            <input
              className="p-3 w-60"
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter city or state name..."
            />

            <button
              onClick={handleSubmit}
              className=" h-12 bg-button"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="relative">
            <div className="search-result-container absolute w-250 z-10">
              {topFour.map((res, index) => (
                <div
                  key={index}
                  className={`bg-slate-300 text-black flex w-[330px] p-5 relative ${
                    input === "" ? "hidden" : ""
                  } ${index === topFour.length - 1 ? "rounded-b-3xl" : ""}`}
                  onClick={() => setInput(res)}
                >
                  {res}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// .search-result-container {
//   position: absolute;
//   width: 250px;
//   z-index: 2;
// }
// .search-result {
//   background-color: aliceblue;
//   color: black;
//   display: flex;
//   width: 96%;
//   padding: 5px;
//   position: relative;
// }

// .search-result:last-child {
//   border-radius: 0px 0px 10px 10px;
// }

// .hidden {
//   display: none !important;
// }

export default SearchBar;
