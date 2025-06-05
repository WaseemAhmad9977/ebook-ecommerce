import useSWR, { mutate } from "swr";
import fetcher from "../util/fetcher";
import discount from "../util/discount";
import {toast} from 'react-toastify'
import http from '../util/http'
const Home = () => {
  const {data:ebook,isLoading:ebookLoading,error:ebookErr}=useSWR('/ebook',fetcher)

  const buyNow = async ()=>{
    try {
       const {data}=await http.post('/payment/order')
       console.log(data)
       
    } catch (err) {
       toast.error(err.response ? err.response.data.message:err.message)
    }
  }
  if (ebookLoading)
  return (
    <div className="grid grid-cols-4 gap-8 w-10/12 mx-auto py-12">
      {Array(8).fill(0).map((_, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded overflow-hidden animate-pulse bg-gray-100"
        >
          <div className="w-full h-[200px] bg-gray-300"></div>
          <div className="p-3 space-y-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="flex gap-2 items-center">
              <div className="h-5 bg-gray-300 rounded w-16"></div>
              <div className="h-5 bg-gray-300 rounded w-10 line-through"></div>
              <div className="h-5 bg-gray-300 rounded w-20"></div>
            </div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  )
  if (ebookErr)
  return (
    <div className="w-10/12 mx-auto py-20 text-center text-red-600 font-semibold text-lg">
      Oops! Something went wrong. Please try again later.
    </div>
  )


  return (
    <div className="grid grid-cols-4 gap-8 w-10/12 mx-auto py-12">
      {
       ebook && ebook.map((item, index) => (
          <div key={index} className="border border-gray-300 shadow-md rounded overflow-hidden">
            <img src="/images/dummy.jpg" alt="ebook thumbnail" className="w-full h-[200px] object-cover" />
            <div className="p-3">
              <h1 className="text-lg font-medium capitalize">{item.title}</h1>
              <div className="flex gap-2 items-center">
                <label className="text-lg font-medium">{discount(item.price,item.discount)}</label>
                <del>{item.price}</del>
                <label className="text-gray-500">{item.discount}%</label>
              </div>
              <button 
              onClick={buyNow}
              className="bg-violet-600 p-3 text-white w-full rounded mt-3 font-medium">Buy Now</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
