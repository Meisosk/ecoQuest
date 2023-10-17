// Constants for emission factors (measured in pounds of CO2 per unit)
const EMISSIONS_PER_MILE_CAR = 0.000411; // Example value for a typical car in METRIC TONS/mile
// boat;
// motorcycle;

const EMISSIONS_PER_KWH_ELECTRICITY = 0.000388; // Example value for electricity in METRIC TONS/kWh ave house: 900 kwh/month small: 700 large: 1500-16
const EMISSIONS_PER_GALLON_HEATING_OIL = 0.0108862; // cold: 1000 gal year ave: 500gal hot: 250gal

const EMISSIONS_PER_DIET_VEGETARIAN = 1.4892; // full metric tons of emissions depending on diet
const EMISSIONS_PER_DIET_PESCATARIAN = 1.71915; // full metric tons of emissions depending on diet
const EMISSIONS_PER_DIET_MEAT_MAX = 3.723; // full metric tons of emissions depending on diet
const EMISSIONS_PER_DIET_MEAT_MIN = 1.95275; // full metric tons of emissions depending on diet

const EMISSIONS_PER_TOP = 0.007; // Tops Blouses & Shirts  metric tons
const EMISSIONS_PER_DRESS = 0.02; // Dresses  metric tons
const EMISSIONS_PER_TEE = 0.008; // Tees & Tanks  8kg 17.637 metric tons
const EMISSIONS_PER_JACKET = 0.017; // Sweaters / coat / jacket  metric tons
const EMISSIONS_PER_JEANS = 0.0273; // Jeans  metric tons
const EMISSIONS_PER_PANTS = 0.025; // Pants / shorts  metric tons
const EMISSIONS_PER_SKIRT = 0.00999; // Skirts  metric tons

const THROWS_OUT_CLOTHES = true;

const EMISSIONS_PER_MILE_FLIGHT = 0.00034; // Example value for a flight in metric tons/mile

// meat daily accounted for 22.5 pounds
// People who ate less than 1.7 ounces of meat accounted for about half that amount, or about 11.8 pounds of carbon dioxide emissions
// while fish eaters accounted for 10.4 pounds of carbon dioxide a day,
// vegetarian diets produced 9 pounds of carbon dioxide daily.

// for every degree above 72 F you set your thermostat, you save 120 pounds of CO2 emissions.
const carMilesDriven = 5000; // miles
const electricityUsage = 500; // kWh
const heatingOilConsumption = 500; // gallons
const dietType = "Meat Max"; // "Pescatarian", "Vegetarian", "Meat Min"

const topCount = 5; // Number of tops
const dressCount = 2; // Number of dresses
const teeCount = 10; // Number of t-shirts
const jacketCount = 3; // Number of jackets/coats
const jeansCount = 4; // Number of jeans
const pantsCount = 7; // Number of pants/shorts
const skirtCount = 3; // Number of skirts

// Calculate emissions for each activity using the provided constants
const carEmissions = carMilesDriven * EMISSIONS_PER_MILE_CAR; // metric tons
const electricityEmissions = electricityUsage * EMISSIONS_PER_KWH_ELECTRICITY; // metric tons
const heatingOilEmissions =
  heatingOilConsumption * EMISSIONS_PER_GALLON_HEATING_OIL; // metric tons
let dietEmissions;

switch (dietType) {
  case "Vegetarian":
    dietEmissions = EMISSIONS_PER_DIET_VEGETARIAN;
    break;
  case "Pescatarian":
    dietEmissions = EMISSIONS_PER_DIET_PESCATARIAN;
    break;
  case "Meat Max":
    dietEmissions = EMISSIONS_PER_DIET_MEAT_MAX;
    break;
  case "Meat Min":
    dietEmissions = EMISSIONS_PER_DIET_MEAT_MIN;
    break;
  default:
    dietEmissions = 0;
}

const topEmissions = topCount * EMISSIONS_PER_TOP; // metric tons
const dressEmissions = dressCount * EMISSIONS_PER_DRESS; // metric tons
const teeEmissions = teeCount * EMISSIONS_PER_TEE; // metric tons
const jacketEmissions = jacketCount * EMISSIONS_PER_JACKET; // metric tons
const jeansEmissions = jeansCount * EMISSIONS_PER_JEANS; // metric tons
const pantsEmissions = pantsCount * EMISSIONS_PER_PANTS; // metric tons
const skirtEmissions = skirtCount * EMISSIONS_PER_SKIRT; // metric tons

const totalEmissions =
  carEmissions +
  electricityEmissions +
  heatingOilEmissions +
  dietEmissions +
  topEmissions +
  dressEmissions +
  teeEmissions +
  jacketEmissions +
  jeansEmissions +
  pantsEmissions +
  skirtEmissions;

console.log("Total Carbon Emissions (metric tons):", totalEmissions);
