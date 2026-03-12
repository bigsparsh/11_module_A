"use client";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import imgx from "../../../public/a6_1.jpeg";

const A6 = () => {
    const [gradSize, setGradSize] = useState<number>(100);
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        
        if (mainRef.current) {
            document.addEventListener("wheel", (e) => {
                const sc =  e.deltaY;
                if (sc > 0) {
                    console.log("askldjsla")
                    setGradSize((gradSize+10))
                } else {
                    console.log("askldjasdsadsasla")

                    setGradSize((gradSize+10))
                    

                }

                console.log(gradSize)
            });
             document.addEventListener("mousemove", (e) => {
                const x =  e.x;
                const y =  e.y;
                if (mainRef.current) {
                    mainRef.current.style.background = "radial-gradient(circle at "+x+"px "+y+"px, transparent "+gradSize+"px, #00000050 "+(gradSize + 100)+"px)"
                }

            });

        }
        return () => {
            document.removeEventListener("mousemove", ()=> {});
            document.removeEventListener("wheel", ()=> {});
        }
    }, [gradSize]);

    return (<div className="h-screen w-screen relative" >
<img src={imgx.src} className="w-full h-full" />
<div className="h-full w-full absolute z-[999] top-0 left-0" ref={mainRef}></div>
    </div>)
}

export default A6;