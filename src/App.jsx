const App = () => {
  return (
    <div className="bg-gray-300 p-5 w-100 h-100 ">
      <div className=" flex justify-start gap-6 pb-5 border-b border-b-4 border-blue-900">
      <img src="src\assets\react.svg" alt="" />
      <h1 className="text-3xl font-bold  ">
        this is the first element
      </h1>
      </div>
      <div className=" mt-20">
      <h3 className="font-bold ">what can you do with react</h3>
      <ol className="list-disc pl-5">
        <li>reason 1 </li>
        <li>reason 2 </li>
        <li>reason 3 </li>
        <li>reason 4 </li>
        <li>reason 5 </li>
      </ol></div>
    </div>
  )
}

export default App