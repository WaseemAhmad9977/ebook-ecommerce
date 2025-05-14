import React, { useState } from "react";

const Admin = () => {
  const [width, setWidth] = useState(280);

  return (
    <div className="h-[5000px] bg-gray-100 pt-24">
      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 h-full bg-white shadow-lg"
        style={{
          width: width,
          transition: "0.3s",
        }}
      ></div>

      {/* Main Content Wrapper */}
      <div
        style={{
          marginLeft: width,
          transition: "0.3s",
          width: `calc(100% - ${width}px)`,
        }}
      >
        {/* Navbar */}
        <nav
          className="fixed top-0 p-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-gray-900 shadow-md z-10"
          style={{
            left: width,
            width: `calc(100% - ${width}px)`,
            transition: "0.3s",
          }}
        >
          <div className="flex justify-between items-center">
            <button
              onClick={() => setWidth(width === 280 ? 0 : 280)}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            >
              <i className="ri-align-right text-white text-2xl"></i>
            </button>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition"
              title="logout"
            >
              <i className="ri-logout-circle-r-line text-white text-2xl"></i>
            </button>
          </div>
        </nav>

        {/* Page Content */}
        <div className="w-11/12 bg-white p-8 mx-auto  rounded-xl shadow-sm">
          <h1 className="font-semibold text-4xl text-gray-800">Hi Admin!</h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;
