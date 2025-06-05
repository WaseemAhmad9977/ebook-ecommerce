

const Ebook = () => {
  
  return (
    
    <div className="space-y-8 animate__animated animate__fadeIn">
  {/* New Ebook Button */}
  <button className="bg-indigo-500 px-6 py-2 rounded text-white font-medium">
    <i className="ri-add-line mr-2"></i>
    New Ebook
  </button>

  {/* Ebook Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* Ebook Card (repeat as needed) */}
    <div>
      <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="ebook" />
      <div className="px-4 pt-2 pb-4 border-l border-r border-b">
        <h1 className="text-[17px] font-medium capitalize mt-3 mb-1">
          Ebook Title
        </h1>
        <div className="flex gap-2 items-center">
          <label className="text-lg font-medium">₹PRICE_AFTER_DISCOUNT</label>
          <del>ORIGINAL_PRICE</del>
          <label className="text-gray-500">DISCOUNT%</label>
        </div>
        <label className="text-sm text-gray-500">
          MMM DD YYYY, hh:mm:ss AM/PM
        </label>
        <div className="mt-4 space-x-3">
          <button className="bg-green-400 text-white px-2 py-1 rounded">
            <i className="ri-edit-line"></i>
          </button>
          <button className="bg-rose-400 text-white px-2 py-1 rounded">
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Slide-in Form (always visible in static version) */}
  {/* <div className="bg-black bg-opacity-90 fixed bottom-0 left-0 w-full h-full animate__animated animate__fadeIn animate__faster">
    <aside className="w-[480px] bg-white h-full fixed top-0 right-0 animate__animated animate__slideInRight animate__faster">
      <div>
        <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100">
          <h1 className="text-[17px] font-medium capitalize">New Ebook</h1>
          <button>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="p-6">
          <form className="flex flex-col gap-8">
            <input
              className="p-3 rounded border focus:outline-indigo-600"
              placeholder="Ebook title goes here"
              name="title"
            />
            <div className="flex gap-8">
              <input
                type="number"
                className="p-3 rounded border focus:outline-indigo-600"
                placeholder="Price"
                name="price"
              />
              <input
                type="number"
                className="p-3 rounded border focus:outline-indigo-600"
                placeholder="Discount"
                name="discount"
              />
            </div>
            <textarea
              className="p-3 rounded border focus:outline-indigo-600"
              placeholder="Description"
              rows="6"
              name="description"
            ></textarea>
            <button className="bg-violet-500 text-white font-medium p-3 rounded flex items-center justify-center gap-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </aside>
  </div> */}
</div>

  );
};

export default Ebook;