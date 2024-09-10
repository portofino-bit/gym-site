import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center p-4 text-gray-400">
      <div>
        <p className="text-red-600">IT'S TIME TO GET</p>
        <h1 className="font-semibold text-4xl sm:text-6xl md:text-7xl  lg:text-8xl ">
          SWOLENNO<span className="text-blue-500">NORMOUS</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium">mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
     <Button func={()=>{
      window.location.href='#generate'
     }}
      text={"Accept & Began"}></Button>
    </div>
  );
}
