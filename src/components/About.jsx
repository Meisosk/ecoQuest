
function About() {
  return (
    <>
  <div className="flex justify-between w-70 p-8 pb-12">
    <div className="flex flex-col pl-20 pr-20 bg-primary rounded-3xl">
    <h1 className="text-slate-200 text-6xl mt-8">Our Mission</h1>
    <p className="text-2xl mt-10 w-80">At EcoQuest, we empower individuals to make sustainable choices for a healthier planet. 
      Our mission is to provide users with tools, knowledge, and inspiration to reduce their carbon footprint, 
      conserve resources, and embrace eco-friendly living. Through our environmental calculator, 
      educational content, challenging quests, and a global community, we facilitate positive 
      change one user at a time, making sustainability accessible and rewarding for all.</p>
    </div>
    <div className="flex ">
    <div className= "bg-primary rounded-3xl pl-20 pr-20 flex flex-col justify-between">
second column
<div className= "bg-primary rounded-3xl h-3/4"> last column</div>
    </div>
  </div>
  </div>
  </>
  )
}

export default About;
