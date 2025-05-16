import React, { useState } from "react";

const Setting = () => {
  const [active,setActive]=useState(0)


 const Category = ()=>{
    return (
      <div className="space-y-6">
        <div className="grid lg:grid-cols-8 gap-6">
          {
            Array(16).fill(0).map((item, index)=>(
              <button key={index} className="bg-gray-50 text-black border border-dashed py-2 rounded capitalize">
                tetsing
              </button>
            ))
          }
        </div>
        <div>
          <form className="space-x-2">
            <input 
              name="title"
              className="border rounded py-2 px-3 w-[350px] focus:outline-indigo-500"
              placeholder="Enter category name"
            />
            <button className="bg-indigo-500 text-white py-2 px-4 rounded">
              <i className="ri-add-line mr-1"></i>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }


  const tabs = [
    {
      label: "category",
      children:<Category/>,
    },

  ];

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="flex gap-4">
         {
          tabs.map((item,index)=>(
             <button 
                className="capitalize text-slate-500 px-4 py-2 rounded hover:bg-gray-100"
                onClick={()=>setActive(index)}
                style={{
                  background:active==index?'#6366f1':null,
                  color:active==index?'#ffffff':null,
                }}
                // style={{
                //   background: active === index ? '#6366f1' : null,
                //   color: active === index ? '#ffffff' : null
                // }}
              >
              {item.label}
              </button>
          ))
         }
      </div>
       
        <div className="h-px bg-gray-100 mt-6" />
          <div className="py-6 px-2">
            {tabs[active].children}
          </div>
    </div>
  );
};

export default Setting;
