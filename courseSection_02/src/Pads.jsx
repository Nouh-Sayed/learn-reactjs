import React from "react";
import padsData from "./padsData";

const Pads = () => {
    const [pads, setPads] = React.useState(padsData);

    function turnalloff() {

        setPads((prevPads) =>
            prevPads.map((pad) => ({
                ...pad,
                on: false
            })))
    }


    function turnallon() {

        setPads((prevPads) =>
            prevPads.map((pad) => ({
                ...pad,
                on: true
            })))
    }


    function handlebttn(id) {
  console.log("clicedd"),
        setPads((prevPads) =>
            prevPads.map((pad) =>
                pad.id === id
                    ? { ...pad, on: !pad.on }
                    : pad
            )
        );
    }
    const buttonElements = pads.map((pad) => (
        
        <button
            onClick={() => handlebttn(pad.id)}
            key={pad.id}
            style={{
                backgroundColor: pad.on ? pad.color : "#222",
            }}
            
            className="w-24 h-24 m-2 rounded-xl border-2 border-red-500 text-xl font-bold cursor-pointer"
        >
            
            {pad.id}
        </button>
      
    ));

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="grid grid-cols-3 gap-4">
                {buttonElements}
            </div>
            <button className="border bg-amber-600" onClick={turnalloff}>turn all off</button>

            <button className="border bg-amber-600" onClick={turnallon}>turn all on</button>


        </div>
    );
};

export default Pads;