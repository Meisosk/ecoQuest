import deer from "../assets/aboutphotos/deer.jpeg";
import bird from "../assets/aboutphotos/bird.jpeg"
import bluebird from "../assets/aboutphotos/bluebird.jpeg"


function About() {
  return (
    <>
      <div className="flex justify-between w-70 p-8 pb-12 absolute">
        <div className="flex flex-col pl-10 pr-10 bg-primary rounded-3xl shadow-md shadow-green-950">
          <div className="bg-slate-200/10 mt-8 p-9 mb-8 rounded-3xl shadow-lg">
          <h1 className="text-slate-200 text-6xl mt-4">Our Mission</h1>
          <p className="text-2xl mt-10 w-80">
            At EcoQuest, we empower individuals to make sustainable choices for
            a healthier planet. Our mission is to provide users with tools,
            knowledge, and inspiration to reduce their carbon footprint,
            conserve resources, and embrace eco-friendly living. Through our
            environmental calculator, educational content, challenging quests,
            and a global community, we facilitate positive change one user at a
            time, making sustainability accessible and rewarding for all.
          </p>
        </div>
        </div>

        <div className=" flex flex-col justify-between w-2/5">
          <div className="bg-primary rounded-3xl pl-5 pr-5 pb-5 shadow-md shadow-green-950">
            <img className=" mt-4 rounded-3xl shadow-lg shadow-black" src={deer} alt="deer" />
          </div>
          <div className="bg-primary rounded-3xl shadow-md shadow-green-950"> 
          <div className="p-5">
          <img className="mt-2 rounded-3xl shadow-lg shadow-black" src={bird} alt="sloth"/>
          </div>
          </div>
        </div>
      </div>
      <div className="relative w-1/4 origin-bottom -rotate-12 translate-x-44 translate-y-1/4">
        <div className="bg-primary rounded-3xl shadow-md shadow-green-950 ">
          <div className="p-5 ">
            <img className="rounded-3xl shadow-lg shadow-black" src={bluebird}/></div>
        </div>
      </div>
    </>
  );
}

export default About;
