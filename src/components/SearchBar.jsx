import { useState, useEffect } from "react";
import { supabase } from "../GetTables";

import { dataFetchingFunctions } from "../GetTables";
const { GetCities, GetLocation } = dataFetchingFunctions;

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [Cities, setCities] = useState([]);
  const [Filtered, setFiltered] = useState([]);
  const [chosenCity, setChosenCity] = useState("Nothing");

  useEffect(() => {
    const location = async () => {
      const user = await supabase.auth.getUser();

      if (!user.data.user) {
        return null;
      }

      const userId = user.data.user.id;
      const locationPromise = GetLocation(userId);
      const locationData = await locationPromise;

      setChosenCity(locationData[0].location);
    };
    location();
  }, []);

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
    //filters through all of the cities from the database making it not case sensitive
    const chosenCityLower = chosenCity.toLowerCase();
    const filteredResults = props.data.filter((facility) =>
      facility.CityName.toLowerCase().includes(chosenCityLower)
    );
    props.onFilterResults(filteredResults);
  }, [chosenCity, props.data]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    const filteredCities = [
      ...new Set(
        Cities.filter((city) =>
          city.toLowerCase().includes(inputValue.toLowerCase())
        )
      ),
    ];

    setFiltered(filteredCities);
  };

  const handleSubmit = () => {
    if (input !== "") {
      setChosenCity(input);
      setInput("");

      props.onFilterResults(
        props.data.filter((facility) =>
          facility.CityName.toLowerCase().includes(input.toLowerCase())
        )
      );

      setFiltered(Cities);
    }
  };

  //makes only 4 cities populate the recomended cities at a time
  const topFour = Filtered.slice(0, 4);

  return (
    <>
      <div className="m-10 flex justify-center ">
        <div>
          <div className="felx ">
            <input
              className="p-3 w-[20vw] rounded-l-2xl search-bar"
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter city name..."
            />

            <button
              onClick={handleSubmit}
              className=" h-12 bg-button rounded-r-xl rounded-l-none p-1"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="relative">
            <div
              className={`search-result-container absolute w-250 z-10 ${
                input === "" ? "hidden" : ""
              }`}
            >
              {topFour.map((res, index) => (
                <div
                  key={index}
                  className={`bg-slate-300 text-black flex w-[330px] p-5 relative ${
                    index === topFour.length - 1 ? "rounded-b-3xl" : ""
                  }`}
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

export default SearchBar;
