
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
export default function Home(){
    return(
        <div>
        <Navbar/>
        <div 
  className="flex flex-col justify-center items-center text-center h-[75vh] bg-gray-50 px-4">
  <div className="text-5xl font-extrabold mb-6 leading-tight">
    Craft Unforgettable<br />Itineraries<br /><span className="text-red-500">with AI Trip Planner</span>
  </div>
  <div className="text-2xl font-medium mb-8 max-w-2xl leading-relaxed">
    Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
  </div>
  <Link to={"/trip"}>  
  <button 
    className="bg-black text-white text-lg px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
    Get Started
  </button>
  </Link>

</div>
<img src='https://wonderplan.ai/_app/immutable/assets/hero.BdTITtUy.webp' alt="planner" className="mx-auto w-full max-w-screen-xl shadow-[0_0_20px_0_rbga(0_0_0_4%)] border border-gray-200 rounded-xl" width="100%" height="100%"></img>
<div className="flex bg-peach h-auto justify-center items-center px-8 py-12">
  <div className="w-1/2 pr-8">
    <div className="text-5xl font-extrabold mb-6 leading-tight">
      Adjust your itinerary as needed
    </div>
    <div className="text-2xl font-medium leading-relaxed">
        Seamlessly manage your itinerary all in one page with Wonderplan - from
        reconfiguring the order of your plans, introducing new destinations to your itinerary, or even discarding plans as needed.
    </div>
  </div>
  <div className="w-1/2 pl-8">
    <img          
      src="https://wonderplan.ai/_app/immutable/assets/feature.BiTy3hN_.webp" 
      alt="planner" 
      className="mx-auto w-full shadow-md border border-gray-200 rounded-xl"
    />
  </div>
</div>  
<div className="flex justify-center items-center bg-gray-50 min-h-[50vh]">
      <div className="bg-black text-white text-center px-8 py-12 rounded-lg w-3/4 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
          Skip the manual trip planning and start your effortless journey with Trip Planner AI today, at no cost.
        </h2>

        <button className="mt-4 bg-white text-black px-6 py-3 rounded-md shadow hover:shadow-lg hover:bg-gray-100 transition-all">
          Try Now
        </button>
      </div>
    </div>
</div>
    )
}