const Dashboard = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 animate__animated animate__fadeIn">
      <div className="shadow-lg p-6 flex items-start gap-4 rounded-lg">
        <img src="/svg/one.svg" className="bg-gray-100 rounded-full w-[100px] h-[100px]" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Report One</h1>
          <label className="text-gray-500 text-lg">16,666</label>
        </div>
      </div>

      <div className="shadow-lg p-6 flex items-start gap-4 rounded-lg">
        <img src="/svg/two.svg" className="bg-gray-100 rounded-full w-[100px] h-[100px]" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Report One</h1>
          <label className="text-gray-500 text-lg">16,666</label>
        </div>
      </div>

      <div className="shadow-lg p-6 flex items-start gap-4 rounded-lg">
        <img src="/svg/three.svg" className="bg-gray-100 rounded-full w-[100px] h-[100px]" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Report One</h1>
          <label className="text-gray-500 text-lg">16,666</label>
        </div>
      </div>

      <div className="shadow-lg p-6 flex items-start gap-4 rounded-lg">
        <img src="/svg/four.svg" className="bg-gray-100 rounded-full w-[100px] h-[100px]" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Report One</h1>
          <label className="text-gray-500 text-lg">16,666</label>
        </div>
      </div>
    </div>
  )
}

export default Dashboard