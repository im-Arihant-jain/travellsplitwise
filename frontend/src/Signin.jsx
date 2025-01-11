import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signin({ setShowPopup }) { // Receive setShowPopup from parent
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const handleClosePopup = () => {
      setShowPopup(false); 
    };
    const handleLogin = (e) => {
      e.preventDefault()
        axios.post("http://localhost:3001/login", { email, password })
        .then(result => {
            console.log(result)
            if(result.status === 200){
                navigate("/splitwise")
                // alert("You are successfully logged in")
                handleClosePopup()
            }else{
                // navigate("/register")
                alert("You are not registered to this service")

            }
       
        })
        .catch(err => console.log(err))
    }
    const handleRegister = (e) => {
      e.preventDefault()
        axios.post("http://localhost:3001/register", { email, password })
        .then(result => {
            console.log(result)
            if(result.status === 200){
                navigate("/")
                alert("You are successfully registered")
                handleClosePopup()
            }else{
                // navigate("/register")
                alert("Registration failed, please try again")

            }
       
        })
        .catch(err => console.log(err))
    }
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Sign Up / Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"/>
            </div>
            <button onClick={handleLogin} type="submit" className=" mb-4 w-full bg-blue-500 text-white py-2 rounded-lg">
              Sign-in
            </button>
            
            <button onClick={handleRegister} className="w-full bg-green-500 text-white py-2 rounded-lg">
              Register
            </button>
          </form>
          <button 
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
            onClick={handleClosePopup}>
            Close
          </button>
        </div>
      </div>
    );
  }
  