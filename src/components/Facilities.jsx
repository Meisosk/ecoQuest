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
    console.log(filteredResults);
    setFilteredFacilities(filteredResults);
  };

  return (
    <div className=" w-full h-full">
      <div>
        <SearchBar data={facilities} onFilterResults={handleFilterResults} />
      </div>
      <div className="flex flex-col w-full h-full ">
        {filteredFacilities.map((facility, index) => (
          <div key={index} className="flex h-1/6 w-3/4 mb-1.7 ml-1.7">
            <div className="bg-primary h-full w-full rounded-3xl p-5">
              <p>Name: {facility.FacilityName}</p>
              <p>GHG QUANTITY (METRIC TONS CO2e): {facility.Emissions}</p>
              <p>Location: {facility.STATE}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
