

function FirstExample() {
  return (
     //bg-[url('/src/assets/bg.jpg')]  bg-contain bg-no-repeat bg-center 
    <div>

  <div className=" p-5 w-100 h-300px bg-gray-200 ">
    

      <div className=" flex justify-start gap-6 pb-5 border-b border-b-4 border-blue-900">
      <img src="src\assets\react.svg" alt="" />
      <h1 className="text-3xl font-bold  text-sky-500 ">
        this is the first element
      </h1>
      </div>
      <div className=" mt-20">
      <h3 className="font-extrabold text-sky-500">what can you do with react</h3>
      <ol className="list-disc pl-5 marker:text-sky-500 font-bold">
        <li >reason 1 </li>
        <li>reason 2 </li>
        <li>reason 3 </li>
        <li>reason 4 </li>
        <li>reason 5 </li>
      </ol></div>
    </div>
    </div>
  )
}

export default FirstExample