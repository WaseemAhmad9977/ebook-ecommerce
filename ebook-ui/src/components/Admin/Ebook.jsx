import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import fetcher from "../../util/fetcher";
import http from "../../util/http";
import moment from "moment";
import discount from "../../util/discount";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import {Navigate} from 'react-router-dom'

const Ebook = () => {
  const [open, setOpen] = useState(false);
  const model = {
    title:'',
    price:'',
    discount:'',
    description:''
  }
  const [ebookForm,setEbookForm]=useState(model)
  const [currentId,setCurrentId]=useState(null)
  const { data: ebook, isLoading: ebookLoading, error: ebookErr } = useSWR('/ebook',fetcher)
  

  const handleEbookForm=(e)=>{
    const input = e.target;
    const name=input.name;
    const value=input.value
    const x = {
      ...ebookForm,
      [name]:value
    }
    setEbookForm(x)
  }


  const createEbook =async(e)=>{
    e.preventDefault()
    try{
      const id =toast.loading("creating ebook",{position:'top-center'})
      await http.post('/ebook',ebookForm)
      mutate('/ebook')
      toast.update(id, { render: "ebook created", type: "success", isLoading: false,autoClose:3000 });
    }
    catch(err)
    {  
       toast.error(err.response ? err.response.data.message : err.message)
    }
    finally{
        setEbookForm(model)
        setOpen(false)
    }
  }

  const deleteEbook = async (id)=>{
      try{
        const toastId = toast.loading('deleting',{position:'top-center'})
        http.delete(`/ebook/${id}`)
        toast.update(toastId,{render:'deleted succesfully',type:"success",isLoading:false,autoClose:3000})
        mutate('/ebook')
      }
      catch(err)
      {
         toast.error(err.response ? err.response.data.message : err.message)
      }
  }

    const handleEdit=(item)=>{
        setCurrentId(item._id)
        delete item._id
        setEbookForm(item)
        setOpen(true)
    }
   
   const saveEdit =async(e)=>{
     e.preventDefault()
     try{
        const toastId = toast.loading('updating',{position:'top-center'})
        await http.put(`/ebook/${currentId}`,ebookForm)
        mutate('/ebook')
        toast.update(toastId,{render:'updated successfully',type:"success",isLoading:false,autoClose:3000})
     }
     catch(err)
     { 
         toast.error(err.response ? err.response.data.message : err.message)
     }
     finally{
        setOpen(false)
        setCurrentId(null)
        setEbookForm(model)
     }
   }

   const handleCancelEdit =()=>{
    setCurrentId(null)
    setEbookForm(model)
    setOpen(false)
   }

   if (ebookLoading) return <ClipLoader />;
   if (ebookErr) return <Navigate to="/login" replace />; 

  return (
    <div className="space-y-8 animate__animated animate__fadeIn">
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-500 px-6 py-2 rounded text-white font-medium"
      >
        <i className="ri-add-line mr-2"></i>
        New Ebook
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ebook.map((item, index) => (
            <div key={index}>
              <img src="https://random-image-pepebigotes.vercel.app/api/random-image"/>
              <div className="px-4 pt-2 pb-4 border-l border-r border-b">
                <h1 className="text-[17px] font-medium capitalize mt-3 mb-1">
                 {item.title}
                </h1>
                <div className="flex gap-2 items-center">
                  <label className="text-lg font-medium">₹{discount(item.price,item.discount)}</label>
                  <del>{item.price}</del>
                  <label className="text-gray-500">{item.discount}%</label>
                </div>
                <label className="text-sm text-gray-500">
                  {moment().format("MMM DD YYYY, hh:mm:ss A")}
                </label>
                <div className="mt-4 space-x-3">
                  <button
                   onClick={()=>handleEdit(item)}
                   className="bg-green-400 text-white px-2 py-1 rounded">
                    <i className="ri-edit-line"></i>
                  </button>

                  <button 
                  onClick={()=>deleteEbook(item._id)}
                  className="bg-rose-400 text-white px-2 py-1 rounded">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {open && (
        <div className="bg-black bg-opacity-90 fixed bottom-0 left-0 w-full h-full animate__animated animate__fadeIn animate__faster">
          <aside className="w-[480px] bg-white h-full fixed top-0 right-0 animate__animated animate__slideInRight animate__faster">
            <div>
              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100">
                <h1 className="text-[17px] font-medium capitalize">
                  New Ebook
                </h1>
                <button onClick={handleCancelEdit}>
                  <i className="ri-close-line"></i>
                </button>
              </div>
              <div className="p-6">
                <form className="flex flex-col gap-8" onSubmit={currentId!==null?saveEdit:createEbook}>
                  <input
                    onChange={handleEbookForm}
                    className="p-3 rounded border focus:outline-indigo-600"
                    placeholder="Ebook title goes here"
                    name="title"
                    value={ebookForm.title}
                  />
                  <div className="flex gap-8">
                    <input
                      onChange={handleEbookForm}
                      type="number"
                      className="p-3 rounded border focus:outline-indigo-600"
                      placeholder="Price"
                      name="price"
                      value={ebookForm.price}
                    />
                    <input
                      onChange={handleEbookForm}
                      type="number"
                      className="p-3 rounded border focus:outline-indigo-600"
                      placeholder="Discount"
                      name="discount"
                      value={ebookForm.discount}
                    />
                  </div>
                  <textarea
                    onChange={handleEbookForm}
                    className="p-3 rounded border focus:outline-indigo-600"
                    placeholder="Description"
                    rows={6}
                    name="description"
                    value={ebookForm.description}
                  ></textarea>
                {currentId !== null ? (
            <div className="flex gap-4">
              <button className="bg-rose-500 text-white font-medium p-3 rounded flex-1">
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-blue-500 text-white font-medium p-3 rounded flex-1 "
                type="button"
              >
                cancel
              </button>
            </div>
          ) : (
            <button className="bg-violet-500 text-white font-medium p-3 rounded flex items-center justify-center gap-2 ">
              Submit
            </button>
          )}
                </form>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Ebook;