import React, { useState } from "react";
import { pantCollection, shirtCollection } from "./data";
import { trowsers } from "../assets";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color.img);
  };

  const handleSelect = (pant) => {
    setSelected(pant.pnimg);
  };

  const handleRefresh = () => {
    setSelectedColor(null);
    setSelected(null);
  };

  return (
    <div className="bg-gradient-to-b from-purple-500 to-indigo-800 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Choose Shirt And Pants Pattern
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative flex justify-center flex-col overflow-hidden">
          <div className="h-auto w-[280px] bg-white  rounded-lg overflow-hidden shadow-md relative">
            {selectedColor && (
              <div className="absolute inset-0 w-[500px]  h-52 object-cover rounded-t-lg clip-path-shirt">
                <img
                  src="img.svg"
                  alt=""
                  className="w-[300px] h-[300px] object-contain rounded-t-lg"
                />
              </div>
            )}
            <img
              src={selectedColor || "/img.svg"}
              alt=""
              className="w-full h-[19rem] object-cover object-top rounded-t-lg clip-path-shirt"
            />
          </div>

          <div className="h-[30rem] left-12 w-[12rem]  bg-white rounded-lg mt-0 overflow-hidden shadow-md relative">
            {selected && (
              <img
                src={"HEIF.svg"}
                alt=""
                className="absolute inset-0 w-[500px] h-[500px] object-contain object-top"
              />
            )}
            <img
              src={selected || "HEIF.svg"}
              alt=""
              className="w-[500px] h-[500px] object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {shirtCollection.map((color, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-full overflow-hidden ${
                  selectedColor === color.img
                    ? "border-4 border-yellow-300"
                    : ""
                }`}
                onClick={() => handleColorSelect(color)}
              >
                <img
                  src={color.img}
                  alt=""
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 pt-10 gap-10  ">
            <img
              src="/shirts/shirt1.svg"
              className="h-[10rem]  items-center bg-[#8449dc] rounded-xl w-[10rem]"
              alt=""
            />
            <img
              src="/shirts/shirt2.svg"
              className="h-[10rem]  items-center bg-[#8449dc] rounded-xl w-[10rem]"
              alt=""
            />
            <img
              src="/shirts/shirt3.svg"
              className="h-[10rem]  items-center bg-[#8449dc] rounded-xl w-[10rem]"
              alt=""
            />
            <img
              src="/shirts/shirt4.svg"
              className="h-[10rem]  items-center bg-[#8449dc] rounded-xl w-[10rem]"
              alt=""
            />
          </div>

          <div className="text-xl font-bold pt-10 mb-2 ">Select Pant Piece</div>

          <div className="grid grid-cols-3 gap-6">
            {pantCollection.map((pant, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-full overflow-hidden ${
                  selected === pant.pnimg ? "border-4 border-yellow-300" : ""
                }`}
                onClick={() => handleSelect(pant)}
              >
                <img
                  src={pant.pnimg}
                  alt=""
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default ColorPicker;
