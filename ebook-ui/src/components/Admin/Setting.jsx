import React, { useState } from "react";
import http from "../../util/http";
import useSWR, { mutate } from "swr";
import fetcher from "../../util/fetcher";
import { ClipLoader } from "react-spinners";

const Setting = () => {
  const [active,setActive]=useState(0)


 const Category = ()=>{
    const {data:category,isLoading,error} = useSWR('/category',fetcher)
   
    const model = {
      name:''
    }
    const [formData,setFormData]=useState(model)

    const handleChange=(e)=>{
      const input = e.target;
      const name = input.name;
      const value=input.value
      const x  = {
        [name]:value
      }
      setFormData(x)
    }

    const createCategory=async (e)=>{
        e.preventDefault()
        try{
           await http.post('/category',formData)
           mutate('/category')
        }
        catch(err)
        {
          console.log(err.reponse?err.reponse.data.message:err.message)
        }
    }

    const deleteCategory= async (id)=>{
      try{
          const data = await http.delete(`/category/${id}`)
          mutate('/category')
      } 
      catch(err)
      {
         console.log(err.reponse ? err.reponse.data.message:err.message)
      }
    }

 if(isLoading)
  return(
 <ClipLoader color="#6366f1" size={40} />
)

    if (error)
  return <h1>Error: {error.message}</h1>;


    return (
      <div className="space-y-6">
        <div className="grid lg:grid-cols-8 gap-6">
          {
            category.map((item, index)=>(
              <button key={index} className="bg-gray-50 text-black border border-dashed py-2 rounded capitalize flex gap-3 justify-center">
               {item.name} 
               <button onClick={()=>deleteCategory(item._id)}>
                <i class="ri-delete-bin-6-line"></i>
               </button>
              </button>
            ))
          }
        </div>
        <div>
          <form className="space-x-2">
            <input 
              onChange={handleChange}
              name="name"
              className="border rounded py-2 px-3 w-[350px] focus:outline-indigo-500"
              placeholder="Enter category name"
            />
            <button className="bg-indigo-500 text-white py-2 px-4 rounded"
             onClick={createCategory}
            >
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
