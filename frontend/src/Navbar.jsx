import { useState } from 'react';
import Signin from './Signin';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false); // Control popup visibility

  const handleButtonClick = () => {
    setShowPopup(true); // Show popup on button click
  };

  return (
    <div className="navbar flex justify-between items-center px-6 py-4 bg-gray-100">
      <div className="text-lg font-bold">Wonderplan</div>
      
      <Link to={"/trip"}>  
        <div className="text-lg font-semibold">Trip-Planner</div>
      </Link>

      <div>
        <button 
          className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all"
          onClick={handleButtonClick}>
          Splitwise
        </button>
      </div>

      {showPopup && (
        <Signin setShowPopup={setShowPopup} /> 
      )}
    </div>
  );
}
