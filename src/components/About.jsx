import deer from "../assets/aboutphotos/deer.jpeg";
import bird from "../assets/aboutphotos/bird.jpeg";
import bluebird from "../assets/aboutphotos/bluebird.jpeg";

function About() {
  return (
    <>
      <div className="flex justify-between w-70 p-8 pb-12 absolute about-body">
        <div className="flex flex-col pl-5 pr-5 bg-primary rounded-3xl shadow-md shadow-green-950 mr-8 mission-contain-1 mb-5 ">
          <div className="bg-slate-200/10 mt-8 p-9 mb-8 rounded-3xl shadow-lg mission-contain-2">
            <h1 className="text-slate-200 text-5xl mt-4 heading-text">
              Our Mission
            </h1>
            <p className="text-xl mt-[.5rem] w-80 about-text body-text">
              At EcoQuest, we empower individuals to make sustainable choices
              for a healthier planet. Our mission is to provide users with
              tools, knowledge, and inspiration to reduce their carbon
              footprint, conserve resources, and embrace eco-friendly living.
              Through our environmental calculator, educational content,
              challenging quests, and a global community, we facilitate positive
              change one user at a time, making sustainability accessible and
              rewarding for all.
            </p>
          </div>
        </div>

        <div className=" flex flex-col justify-around w-2/6 animal-group">
          <div className="bg-primary rounded-3xl pl-5 pr-5 pb-5 shadow-md shadow-green-950 mb-28 top-pic">
            <img
              className=" mt-4 rounded-3xl shadow-lg shadow-black img-size"
              src={deer}
              alt="deer"
            />
          </div>

          <div className="absolute  origin-bottom -rotate-12 translate-x-[5rem] translate-y-[-1rem] translation">
            <div className="bg-primary rounded-3xl shadow-md shadow-green-950 ">
              <div className="p-5 ">
                <img
                  className="rounded-3xl shadow-lg shadow-black  h-[200px] img-size"
                  src={bluebird}
                />
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-3xl shadow-md shadow-green-950 ">
            <div className="p-5">
              <img
                className="mt-2 rounded-3xl shadow-lg shadow-black img-size"
                src={bird}
                alt="sloth"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
