import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { dataFetchingFunctions } from "../GetTables";
const { GetFacilities } = dataFetchingFunctions;

function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const [filteredFacilities, setFilteredFacilities] = useState([]); // State for filtered results

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetFacilities();
      setFacilities(data);
    };
    fetchData();
  }, []);

  const handleFilterResults = (filteredResults) => {
    const sortedResults = filteredResults.sort((a, b) =>
      a.STATE.localeCompare(b.STATE)
    );
    setFilteredFacilities(filteredResults);
  };

  return (
    <div className=" w-full h-screen">
      <div>
        <SearchBar data={facilities} onFilterResults={handleFilterResults} />
      </div>
      <div className="flex flex-col w-full h-full ">
        {filteredFacilities.length === 0 ? (
          <p className="text-center">Please find a city nearest you</p>
        ) : (
          filteredFacilities.map((facility, index) => (
            <div key={index} className="flex w-3/4 mb-1.7 ml-1.7 text-words  ">
              <div className="bg-primary flex flex-col w-full rounded-3xl p-5 mb-1.7 shadow-xl">
                <p className="mb-3 ">
                  Name:&nbsp;&nbsp;&nbsp;
                  <span className="text-xl">{facility.FacilityName}</span>
                </p>
                <p className="mb-3">
                  GHG QUANTITY (METRIC TONS CO2e):&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl">{facility.Emissions}</span>
                </p>
                <p className="mb-3">
                  Location:&nbsp;&nbsp;
                  <span className=" text-lg">{facility.STATE}</span>{" "}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Facilities;
