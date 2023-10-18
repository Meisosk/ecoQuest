import React, { useState, useEffect } from "react";
import * as EmissionConstants from "../data/calculator";
import { useForm } from "./FormProvider";

function Form({ onSubmit }) {
  // State variables to store user inputs

  const { setEmissionTotal } = useForm();

  const [carMilesDriven, setCarMilesDriven] = useState(null);
  const [electricityUsage, setElectricityUsage] = useState(null);
  const [heatingOilConsumption, setHeatingOilConsumption] = useState(null);
  const [dietType, setDietType] = useState("MeatMin");
  const [totalEmissions, setTotalEmissions] = useState(null);
  const [throwsOutClothes, setThrowsOutClothes] = useState(false);
  const [tops, setTops] = useState(0);
  const [dresses, setDresses] = useState(0);
  const [tShirts, setTshirts] = useState(0);
  const [jeans, setJeans] = useState(0);
  const [pants, setPants] = useState(0);
  const [skirts, setSkirts] = useState(0);
  const [jackets, setJackets] = useState(0);

  const calculateEmissions = (clothingTotal) => {
    const carEmissions =
      carMilesDriven * EmissionConstants.EMISSIONS_PER_MILE_CAR;
    const electricityEmissions =
      electricityUsage * EmissionConstants.EMISSIONS_PER_KWH_ELECTRICITY;
    const heatingOilEmissions =
      heatingOilConsumption *
      EmissionConstants.EMISSIONS_PER_GALLON_HEATING_OIL;

    let dietEmissions = 0;
    if (dietType === "Vegetarian") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_VEGETARIAN;
    } else if (dietType === "Pescatarian") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_PESCATARIAN;
    } else if (dietType === "MeatMax") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_MEAT_MAX;
    } else if (dietType === "MeatMin") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_MEAT_MIN;
    }

    let total =
      carEmissions +
      electricityEmissions +
      heatingOilEmissions +
      dietEmissions +
      clothingTotal;

    if (throwsOutClothes) {
      total += (total / 100) * 3;
    }
    setEmissionTotal(total);
    setTotalEmissions(total);
  };

  // gives values to the dopdowns
  const handleHouseSizeChange = (selectedSize) => {
    if (selectedSize === "Small") {
      setElectricityUsage(700);
    } else if (selectedSize === "Average") {
      setElectricityUsage(900);
    } else if (selectedSize === "Large") {
      setElectricityUsage(1500);
    }
  };

  const handleCityTempChange = (selectedSize) => {
    if (selectedSize === "Cold") {
      setHeatingOilConsumption(1000);
    } else if (selectedSize === "Average") {
      setHeatingOilConsumption(500);
    } else if (selectedSize === "Hot") {
      setHeatingOilConsumption(250);
    }
  };

  const calculateClothingEmissions = () => {
    // Calculate emissions for each clothing type based on the number of items
    const totalClothingEmissions =
      tops * EmissionConstants.EMISSIONS_PER_TOP +
      dresses * EmissionConstants.EMISSIONS_PER_DRESS +
      tShirts * EmissionConstants.EMISSIONS_PER_TEE +
      jackets * EmissionConstants.EMISSIONS_PER_JACKET +
      jeans * EmissionConstants.EMISSIONS_PER_JEANS +
      pants * EmissionConstants.EMISSIONS_PER_PANTS +
      skirts * EmissionConstants.EMISSIONS_PER_SKIRT;

    calculateEmissions(totalClothingEmissions);
  };

  return (
    <div className="absolute w-screen inset-x-0 h-screen bg-gray-800 bg-opacity-50 z-10">
      <div className="bg-gray-300 p-10 relative top-64 left-1/4 w-2/4 rounded-3xl">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-4">
            <label
              htmlFor="carMilesDriven"
              className="block mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Miles Driven by Car (Yearly):
            </label>
            <input
              type="number"
              id="carMilesDriven"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              placeholder="Enter Miles"
              value={carMilesDriven === null ? "" : carMilesDriven}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value) && value >= 0) {
                  setCarMilesDriven(value);
                }
              }}
              required
            />
          </div>
          <div className="mb-4 w-full flex">
            <div className="w-1/6">
              <label
                htmlFor="houseSize"
                className="block mb-2  text-lg font-medium pl-1 text-gray-900"
              >
                House Size:
              </label>
              <select
                id="houseSize"
                className="p-4 text-gray-900 border border-gray-300 w-full rounded-lg sm:text-md dark:bg-gray-100"
                onChange={(e) => handleHouseSizeChange(e.target.value)}
              >
                <option value="Small">Small</option>
                <option value="Average">Average</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className="w-5/6 pl-10">
              <label
                htmlFor="houseSize"
                className="block mb-2 text-lg font-medium pl-1 text-gray-900"
              >
                Electricity Usage (kWh):
              </label>
              <input
                type="number"
                id="electricityUsage"
                className="p-4 text-gray-900 border w-full border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                placeholder="Enter kWh"
                value={electricityUsage === null ? "" : electricityUsage}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value) && value >= 0) {
                    setElectricityUsage(value);
                  }
                }}
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full flex">
            <div className="w-1/6">
              <label
                htmlFor="houseSize"
                className="block mb-2  text-lg font-medium pl-1 text-gray-900"
              >
                City Temp:
              </label>
              <select
                id="houseSize"
                className="p-4 text-gray-900 border border-gray-300 w-full rounded-lg sm:text-md dark:bg-gray-100"
                onChange={(e) => handleCityTempChange(e.target.value)}
              >
                <option value="Cold">Cold</option>
                <option value="Average">Average</option>
                <option value="Hot">Hot</option>
              </select>
            </div>
            <div className="w-5/6 pl-10">
              <label
                htmlFor="houseSize"
                className="block mb-2 text-lg font-medium pl-1 text-gray-900"
              >
                Heating Oil Consumption (gallons):
              </label>
              <input
                type="number"
                id="electricityUsage"
                className="p-4 text-gray-900 border w-full border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                placeholder="Enter Gallons of Heating Oil"
                value={
                  heatingOilConsumption === null ? "" : heatingOilConsumption
                }
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value) && value >= 0) {
                    setHeatingOilConsumption(value);
                  }
                }}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dietType"
              className="block mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Diet Type:
            </label>
            <select
              id="dietType"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={dietType}
              onChange={(e) => setDietType(e.target.value)}
            >
              <option value="Vegetarian">Vegetarian</option>
              <option value="Pescatarian">Pescatarian</option>
              <option value="MeatMax">Often eat meat</option>
              <option value="MeatMin">Occasionally eat meat</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="throwsOutClothes"
              className="block mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              What do you do with old clothes:
            </label>
            <select
              id="throwsOutClothes"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={throwsOutClothes}
              onChange={(e) => setThrowsOutClothes(e.target.value === "true")}
            >
              <option value="true">Throw them out</option>
              <option value="false">Donate them</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="text-black text-xl text-center pb-2">
              Amount of clothes purchaed yearly:
            </p>
            <label
              htmlFor="carMilesDriven"
              className=" mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Tops:
            </label>
            <input
              type="number"
              className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={tops}
              onChange={(e) => setTops(e.target.value)}
            />
            <label
              htmlFor="carMilesDriven"
              className=" mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Dresses:
            </label>
            <input
              type="number"
              className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={dresses}
              onChange={(e) => setDresses(e.target.value)}
            />

            <label
              htmlFor="carMilesDriven"
              className=" mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              T-shirts:
            </label>
            <input
              type="number"
              className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={tShirts}
              onChange={(e) => setTshirts(e.target.value)}
            />
            <label
              htmlFor="carMilesDriven"
              className=" mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Jeans:
            </label>
            <input
              type="number"
              className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={jeans}
              onChange={(e) => setJeans(e.target.value)}
            />
            <label
              htmlFor="carMilesDriven"
              className=" mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Pants:
            </label>
            <input
              type="number"
              className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={pants}
              onChange={(e) => setPants(e.target.value)}
            />
            <label
              htmlFor="carMilesDriven"
              className=" mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Skirts:
            </label>
            <input
              type="number"
              className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={skirts}
              onChange={(e) => setSkirts(e.target.value)}
            />
            <label
              htmlFor="carMilesDriven"
              className=" mb-2 text-lg font-medium pl-1 text-gray-900"
            >
              Jackets:
            </label>
            <input
              type="number"
              className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
              value={jackets}
              onChange={(e) => setJackets(e.target.value)}
            />
          </div>
          <button
            onClick={calculateClothingEmissions}
            type="submit"
            className="bg-button"
          >
            Calculate Emissions
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
