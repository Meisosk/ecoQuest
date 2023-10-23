import React from "react";

function Donation() {
  return (
    <div className="grid grid-cols-3 mt-10 mb-10 justify-items-center donate-col">
      <div className="h-auto w-4/5 bg-primary rounded-3xl m-1.7 p-4 shadow-lg">
        <p className="text-center p-5">
          <a
            className="text-slate-200 text-4xl "
            target="#"
            href="https://www.coolearth.org/"
          >
            Cool Earth
          </a>
        </p>
        <p className="text-center text-sm p-3  text-words">
          Cool Earth, boasting a perfect 100% Charity Navigator score, partners
          with indigenous communities to safeguard endangered rainforests,
          making a significant impact in the fight against climate change.
        </p>
      </div>
      <div className=" w-4/5 bg-primary rounded-3xl m-1.7 p-4 shadow-lg">
        <p className="text-center p-5">
          <a
            className="text-slate-200 text-3xl "
            target="#"
            href="https://www.catf.us/support/"
          >
            Clean Air Task Force
          </a>
        </p>
        <p className="text-center text-sm p-3 text-words">
          The Clean Air Task Force is a highly esteemed organization dedicated
          to addressing the critical issue of air pollution and climate change.
          The group has earned an impressive 99% rating on Charity Navigator,
          underscoring its unwavering commitment to advancing innovative
          solutions for cleaner air and a healthier planet.
        </p>
      </div>
      <div className="h-auto w-4/5 bg-primary rounded-3xl m-1.7 p-4 shadow-lg">
        <p className="text-center p-5">
          <a
            className="text-slate-200 text-4xl "
            target="#"
            href="https://carbon180.org/"
          >
            Carbon180
          </a>
        </p>
        <p className="text-center text-sm p-3 text-words">
          Carbon180 is reversing two centuries of carbon emissions. They work
          with policymakers, entrepreneurs, and peer organizations across the US
          to design policies that will bring necessary carbon removal solutions
          to gigaton scale.
        </p>
      </div>
      <div className="h-auto w-4/5 bg-primary rounded-3xl m-1.7 p-4 shadow-lg">
        <p className="text-center p-5">
          <a
            className="text-slate-200 text-4xl "
            target="#"
            href="https://www.earthisland.org/"
          >
            Earth Island
          </a>
        </p>
        <p className="text-center text-sm p-3 text-words">
          Earth Island is a leading nonprofit organization that champions
          environmental sustainability and grassroots initiatives globally.
          Known for its exceptional commitment to fostering positive change,
          Earth Island supports a diverse range of projects aimed at preserving
          the environment and empowering communities.
        </p>
      </div>
      <div className="h-auto w-4/5 bg-primary rounded-3xl m-1.7 p-4 shadow-lg">
        <p className="text-center p-5">
          <a
            className="text-slate-200 text-4xl "
            target="#"
            href="https://earthjustice.org/"
          >
            EarthJustice
          </a>
        </p>
        <p className="text-center text-sm p-3 text-words">
          Earthjustice is a renowned nonprofit legal organization dedicated to
          protecting our environment and public health through the power of the
          law. With a steadfast commitment to ensuring a just and sustainable
          future for all, Earthjustice fights for environmental justice,
          advocating for policies and legal actions that uphold our planet and
          its inhabitants.
        </p>
      </div>
      <div className="h-auto w-4/5 bg-primary rounded-3xl m-1.7 p-4 shadow-lg ">
        <p className="text-center p-5">
          <a
            className="text-slate-200 text-4xl "
            target="#"
            href="https://www.terrapraxis.org/"
          >
            TerraPraxis
          </a>
        </p>
        <p className="text-center text-sm p-3 text-words">
          Powered by philanthropy, Terra Praxis designs transformative
          strategies to address the most significant risks to the energy
          transition mapping uncharted decarbonization territory.
        </p>
      </div>
    </div>
  );
}

export default Donation;
