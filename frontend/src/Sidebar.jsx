import React from "react";
import { RiDashboard2Fill } from "react-icons/ri";
import { IoFlagOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-50 h-screen p-6 border-r border-gray-200">
      {/* Top Menu Items */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-800 cursor-pointer">
          <span className="material-icons"><RiDashboard2Fill /></span>
          <span className="font-medium">Dashboard</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-800 cursor-pointer">
          <span className="material-icons"> <IoFlagOutline /> </span>
          <span className="font-medium">Recent activity</span>
        </div>
        <div className="flex items-center space-x-2 text-teal-600 font-bold cursor-pointer">
          <span className="material-icons"><CiViewList /></span>
          <span>All expenses</span>
        </div>
      </div>

      {/* Groups Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-gray-500">
          <span className="uppercase text-sm font-medium">Groups</span>
          <button className="text-sm text-teal-600 hover:underline">+ add</button>
        </div>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li className="flex items-center space-x-2 cursor-pointer">
            {/* <span className="material-icons">label</span> */}
            <span>abc</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            {/* <span className="material-icons">label</span> */}
            <span>personal</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            {/* <span className="material-icons">label</span> */}
            <span>Rishikesh</span>
          </li>
        </ul>
      </div>

      {/* Friends Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-gray-500">
          <span className="uppercase text-sm font-medium">Friends</span>
          <button className="text-sm text-teal-600 hover:underline">+ add</button>
        </div>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li className="flex items-center space-x-2 cursor-pointer">
            {/* <span className="material-icons">person</span> */}
            <span>Akshaj</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            {/* <span className="material-icons">person</span> */}
            <span>Animesh</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            {/* <span className="material-icons">person</span> */}
            <span>Anuj Kumar Singh</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            {/* <span className="material-icons">person</span> */}
            <span>Kanak</span>
          </li>
        </ul>
      </div>

      {/* Invite Friends Section */}
      <div className="mt-8">
        <h3 className="uppercase text-sm font-medium text-gray-500 mb-2">
          Invite friends
        </h3>
        <input
          type="email"
          placeholder="Enter an email address"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
        />
        <button className="w-full mt-2 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700">
          Send invite
        </button>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Share
          </button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
