import React, { useState } from "react";
import * as EmissionConstants from "../data/calculator";
import { useForm } from "./FormProvider";
import { Link } from "react-router-dom";

function Form({ onSubmit }) {
  // State variables to store user inputs

  const { setFormData } = useForm();

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

  const pieData = [];
  const calculateEmissions = (clothingTotal) => {
    pieData.push(clothingTotal);
    const carEmissions =
      carMilesDriven * EmissionConstants.EMISSIONS_PER_MILE_CAR;
    pieData.push(carEmissions);
    const electricityEmissions =
      electricityUsage * EmissionConstants.EMISSIONS_PER_KWH_ELECTRICITY;
    pieData.push(electricityEmissions);
    const heatingOilEmissions =
      heatingOilConsumption *
      EmissionConstants.EMISSIONS_PER_GALLON_HEATING_OIL;
    pieData.push(heatingOilEmissions);

    let dietEmissions = 0;
    if (dietType === "Vegetarian") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_VEGETARIAN;
      pieData.push(dietEmissions);
    } else if (dietType === "Pescatarian") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_PESCATARIAN;
      pieData.push(dietEmissions);
    } else if (dietType === "MeatMax") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_MEAT_MAX;
      pieData.push(dietEmissions);
    } else if (dietType === "MeatMin") {
      dietEmissions = EmissionConstants.EMISSIONS_PER_DIET_MEAT_MIN;
      pieData.push(dietEmissions);
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
    setTotalEmissions(total);

    setFormData(pieData);
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
    <div className="absolute w-screen inset-x-0 h-auto bg-gray-800 bg-opacity-50 z-10 p-10">
      <div className="bg-gray-300 p-10 relative left-1/4 w-2/4 rounded-3xl form">
        <form onSubmit={(e) => onSubmit(e)}>
          <p className="text-gray-900 text-center">
            This information will only save if you are{" "}
            <Link to="/signin" className="underline text-button ">
              signed in!
            </Link>
          </p>
          <p className="text-gray-900 text-center text-xl pt-5">
            Please input your yearly usage of the following:
          </p>
          <br />
          <div className="mb-4">
            <label
              htmlFor="carMilesDriven"
              className="block mb-2 text-lg font-medium pl-1 text-gray-900 label-text "
            >
              Miles Driven by Car:
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
          <div className="mb-4 w-full flex select-container items-end">
            <div className="w-1/6 full-width">
              <label
                htmlFor="houseSize"
                className="block mb-2  text-lg font-medium pl-1 text-gray-900 label-text"
              >
                House Size:
              </label>
              <select
                id="houseSize"
                className="p-4 text-gray-900 border border-gray-300 w-full rounded-lg sm:text-md dark:bg-gray-100 form-selector"
                onClick={(e) => handleHouseSizeChange(e.target.value)}
              >
                <option value="Small">Small</option>
                <option value="Average">Average</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className="w-5/6 pl-10 no-p">
              <label
                htmlFor="houseSize"
                className="block mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
              >
                Electricity Usage (kWh):
                <p className="text-sm text-gray-500">
                  If unsure click your house size
                </p>
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
          <div className="mb-4 w-full flex select-container items-end">
            <div className="w-1/6 full-width">
              <label
                htmlFor="houseSize"
                className="block mb-2  text-lg font-medium pl-1 text-gray-900 label-text"
              >
                City Temp:
              </label>
              <select
                id="houseSize"
                className="p-4 text-gray-900 border border-gray-300 w-full rounded-lg sm:text-md dark:bg-gray-100 form-selector"
                onClick={(e) => handleCityTempChange(e.target.value)}
              >
                <option value="Hot">Hot</option>
                <option value="Average">Average</option>
                <option value="Cold">Cold</option>
              </select>
            </div>
            <div className="w-5/6 pl-10 no-p">
              <label
                htmlFor="houseSize"
                className="block mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
              >
                Heating Oil Consumption (gallons):
                <p className="text-sm text-gray-500 ">
                  If unsure click your city temp
                </p>
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
              className="block mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
            >
              Diet Type:
            </label>
            <select
              id="dietType"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100 "
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
              className="block mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
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
            <p className="text-black text-xl text-center pb-2 clothes-title">
              Amount of clothes purchaed yearly:
            </p>
            <div className="flex justify-evenly items-center">
              <div className="clothes-amount">
                <label
                  htmlFor="carMilesDriven"
                  className=" mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
                >
                  Tops:
                </label>
                <input
                  type="number"
                  className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                  value={tops}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (!isNaN(value) && value >= 0) {
                      setTops(value);
                    }
                  }}
                />
              </div>
              <div className="clothes-amount">
                <label
                  htmlFor="carMilesDriven"
                  className=" mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
                >
                  Dresses:
                </label>
                <input
                  type="number"
                  className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                  value={dresses}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (!isNaN(value) && value >= 0) {
                      setDresses(value);
                    }
                  }}
                />
              </div>
              <div className="clothes-amount">
                <label
                  htmlFor="carMilesDriven"
                  className=" mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
                >
                  T-shirts:
                </label>
                <input
                  type="number"
                  className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                  value={tShirts}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (!isNaN(value) && value >= 0) {
                      setTshirts(value);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="clothes-amount">
              <label
                htmlFor="carMilesDriven"
                className=" mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
              >
                Jeans:
              </label>
              <input
                type="number"
                className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                value={jeans}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value) && value >= 0) {
                    setJeans(value);
                  }
                }}
              />
            </div>
            <div className="clothes-amount">
              <label
                htmlFor="carMilesDriven"
                className=" mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
              >
                Pants:
              </label>
              <input
                type="number"
                className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                value={pants}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value) && value >= 0) {
                    setPants(value);
                  }
                }}
              />
            </div>
            <div className="clothes-amount">
              <label
                htmlFor="carMilesDriven"
                className=" mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
              >
                Skirts:
              </label>
              <input
                type="number"
                className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                value={skirts}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value) && value >= 0) {
                    setSkirts(value);
                  }
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center m-5">
            <div className="clothes-amount">
              <label
                htmlFor="carMilesDriven"
                className=" mb-2 text-lg font-medium pl-1 text-gray-900 label-text"
              >
                Jackets:
              </label>
              <input
                type="number"
                className=" w-1/6 p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md dark:bg-gray-100"
                value={jackets}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value) && value >= 0) {
                    setJackets(value);
                  }
                }}
              />
            </div>
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
