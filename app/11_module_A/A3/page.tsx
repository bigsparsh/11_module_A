"use client";
import { useRef } from "react";
import a3_1 from "../../../public/a3_1.jpg";
import a3_2 from "../../../public/a3_2.jpg";
import a3_3 from "../../../public/a3_3.jpg";
import a3_4 from "../../../public/a3_4.png";
import a3_5 from "../../../public/a3_5.jpg";
import a3_6 from "../../../public/a3_6.jpg";

const A3 = () => {
    const animRef = useRef<HTMLDivElement>(null);

    const handlePause = () => {
        console.log("here")
        if (animRef.current)
        animRef.current.style.animationDuration = "99999s";
    }
    const handleResume = () => {
        if (animRef.current)
        animRef.current.style.animationDuration = "10s";
    }

    return <div className=" h-screen w-screen grid place-items-center  bg-emerald-900">
        <div className="flex absolute top-0 py-3 text-white gap-3">
            <button onClick={handlePause} className="border border-2 px-2 rounded-lg">Pause</button>
        <button onClick={handleResume} className="border border-2 px-2 rounded-lg"  >Resume</button>
        </div>

        <div className="relative" ref={animRef} style={{
            position: "relative",
            transformStyle: "preserve-3d",
            perspective: '5000px',
            animationDuration: "10s",
            animationName: "spin",
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            animationIterationCount: "infinite",
        }}>

<div className="bg-green-500/50 w-[200px] h-[200px] absolute rotate-x-90 translate-y-[100px]">
        <img src={a3_1.src} className="w-full h-full" />
</div>
<div className="bg-red-500/50 w-[200px] h-[200px] absolute rotate-x-90 -translate-y-[100px]">
        <img src={a3_2.src} className="w-full h-full" />
</div>
<div className="bg-red-500/50 w-[200px] h-[200px] absolute rotate-y-90 translate-x-[100px]">
        <img src={a3_3.src} className="w-full h-full" />
</div>
<div className="bg-red-500/50 w-[200px] h-[200px] absolute rotate-y-90 -translate-x-[100px]">
        <img src={a3_4.src} className="w-full h-full" />
</div>
<div className="bg-blue-500/50 w-[200px] h-[200px] absolute translate-z-[100px]">
        <img src={a3_5.src} className="w-full h-full" />
</div>
<div className="bg-red-500/50 w-[200px] h-[200px] absolute -translate-z-[100px]">
        <img src={a3_6.src} className="w-full h-full" />
</div>

        </div>
    </div>
}

export default A3;