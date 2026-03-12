"use client";
import { useEffect, useRef } from "react";
import bg_img from "../../../public/a2_1.png";
import sun from "../../../public/a2_2.png";
import moon from "../../../public/a2_3.png";
const A2 = () => {
  const dayCycle = useRef(null);

  useEffect(() => {
    
  }, [])


  return (
    <div className="grid place-items-center relative h-screen w-screen">
      <p className="absolute top-0 mx-auto text-white font-bold my-2 text-sm tracking-widest text-right">
        NIGHT
      </p>
      <div className="flex flex-col absolute top-1/3 px-2 left-0 justify-center items-center gap-2">
        <button id="night" className="w-full border border-2 px-2 rounded-lg">
          Night
        </button>
        <button id="dawn" className="w-full border border-2 px-2 rounded-lg">
          Dawn
        </button>
        <button id="day" className="w-full border border-2 px-2 rounded-lg">
          Day
        </button>
        <button id="dusk" className="w-full border border-2 px-2 rounded-lg">
          Dusk
        </button>
      </div>

      <div className="flex flex-col absolute top-1/3 px-2 right-0 justify-center items-center gap-2">
        <button id="slow" className="w-full border border-2 px-2 rounded-lg">
          Slow
        </button>
        <button id="normal" className="w-full border border-2 px-2 rounded-lg">
          Normal
        </button>
        <button id="fast" className="w-full border border-2 px-2 rounded-lg">
          Fast
        </button>
      </div>

      <div className="flex my-2 absolute bottom-0 px-2 mx-auto justify-center items-center gap-2">
        <button id="play" className="w-full border border-2 px-2 rounded-lg">
          Play
        </button>
        <button id="pause" className="w-full border border-2 px-2 rounded-lg">
          Pause
        </button>
        <button id="stop" className="w-full border border-2 px-2 rounded-lg">
          Stop
        </button>
      </div>

      <div
        className={"bg-[url('" + bg_img.src + "')] w-full h-full absolute"}
        style={{
          backgroundImage: "url()",
        }}
      >
        askjdask
      </div>

			<div className="w-[75%] flex justify-between" ref={dayCycle}>
			<img src={sun.src} height="200" width="200" className="" />
			<img src={moon.src} height="200" width="200" className="" />
			</div>
    </div>
  );
};

export default A2;
