import Image from "next/image";
import React from "react";


export default function ProcessDiagram() {
  return (
    <div className="flex items-center justify-between flex-wrap max-w-[70rem] m-auto px-5 py-5 pb-10 h-auto">
     
      <div className="flex flex-col items-center">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={"/waste-bin-2.png"}
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <span className="font-bold text-xl dark:text-white/80 text-black/80">
          Collection
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={"/truck.png"}
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <span className="font-bold text-xl dark:text-white/80 text-black/80">
          Transportation
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={"/recover-4.png"}
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <span className="font-bold text-xl dark:text-white/80 text-black/80">
          Recovery
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={"/process-1.png"}
            alt=""
            fill
            style={{ objectFit: "contain" }}
            className="dark:invert"
          />
        </div>
        <span className="tracking-wider font-bold text-xl dark:text-white/80 text-black/80">
          Processing
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={"/disposal-1.png"}
            alt=""
            fill
            style={{ objectFit: "contain" }}
            className="dark:invert"
          />
        </div>
        <span className="font-bold text-xl dark:text-white/80 text-black/80">
          Disposal
        </span>
      </div>


    {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
    <a href="#">
    <Image

            className=""
            src={"/waste-bin-2.png"}
            alt=""
            fill
            // style={{ objectFit: "contain" }}
          />
    </a>

    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></div>
    Collection */}
    </div>
  );
}
