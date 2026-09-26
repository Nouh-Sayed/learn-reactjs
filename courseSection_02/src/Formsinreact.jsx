import React from "react";

const Formsinreact = () => {
  function signup(formData) {
    //   const formeltest = new FormData(event.currentTarget);
    //   const formData = new FormData(formeltest);

    // console.log(formData.get("email"));
    // console.log(formData.get("password"));
    // console.log(formData.get("description"));
    // console.log(formData.get("employmentsStatus"));
    // const employmentsStatu = formData.getAll("employmentsStatu");
    // console.log(employmentsStatu);
    // console.log(formData.get("favcolor"))
 const data = Object.fromEntries(formData)
const employment  = formData.getAll("employment");
const allData = {
  ...data,
  employment,
}
console.log(allData)
  }
  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        method="post"
        action={signup}
        className="w-96 bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Sign Up Form
        </h1>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            placeholder="nouhsayed@gmail.com"
            id="email"
            name="email"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
            defaultValue={'nouhsayed@gmail.com'}
          >
            Password
          </label>

          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            defaultValue={"NOUHHHH"}
          />
        </div>

        <label htmlFor="description">description</label>
        <br />
        <textarea
          name="description"
          id="description"
          className="border"
          defaultValue={"THIS IS DESC"}
        ></textarea>
        <br />
        <fieldset className=" border flex flex-col">
          <legend>employment status</legend>
          <label htmlFor="">
            <input
              type="radio"
              name="employmentsStatus"
              id=""
              value="unemployed "
            />
            unemployed
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="employmentsStatus"
              id=""
              value="true"
              defaultChecked
            />
            part time
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="employmentsStatus"
              id=""
              value="full time"
            />
            full time
          </label>
        </fieldset>
        <br />

        <fieldset className=" border flex flex-col">
          <legend>time statu</legend>
          <label htmlFor="">
            <input
              type="checkbox"
              name="in time"
              id=""
              value="unemployeddddddd"
            />
            in time
          </label>
          <label htmlFor="">
            <input type="checkbox" name="employment" id="" value="late" defaultChecked= {true} />
        late
          </label>
          <label htmlFor="">
            <input type="checkbox" name="employment" id="" value="dont comeing" />
            dont comeing
          </label>
        </fieldset>
        <br />

        <label htmlFor="favcolor">what is your fav color ? </label><br />
        <select name="favcolor" id="favcolor " className="border  w-50" 
         defaultValue="blue"
        >
           <option value="">--choose the color---</option> 
        <option value="red">red</option>
         <option value="yollou">yollou</option>
          <option value="blue">blue</option></select> <br /> <br />
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Formsinreact;
