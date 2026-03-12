"use client";
import { useRef } from "react";


const A4 = () => {
    const paraRef = useRef<HTMLParagraphElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
const handleSearch = () => {
    if (paraRef.current && inputRef.current) {
        const searchParams = inputRef.current.value.split(", ");
        const ourText = paraRef.current.innerText.split(" ");
        
        for (let  i =0; i < searchParams.length; i++) {
        for (let j = 0; j < ourText.length; j++) {
            console.log(searchParams[i],ourText[j])
            if (searchParams[i].trim() == ourText[j].trim()) {
                ourText[j] = "<span style='background-color: rgb("+rand(0,255)+", "+rand(0, 255)+",  "+rand(0, 255)+");'>"+ourText[j]+"</span>";
            }
        }
    }
    let x = "";
    for (let j = 0; j < ourText.length; j++) {
        x += ourText[j] + " ";
    }
    paraRef.current.innerHTML = x;

    }
}

const rand = (min: number, max: number) => {
    return Math.round(Math.random() *(max - min)) + min;
}

const handleClear = () => {
    if (inputRef.current) {
        inputRef.current.value = "";
    }
}

return <div className="bg-emerald-900 h-screen w-screen grid place-items-center">
      <div className="rounded-xl bg-white flex flex-col w-full max-w-1/2 p-10 justify-center items-center gap-3">
        <h1 className="">
            Multi-Keyword Highlighter
        </h1>
        <p className="p-5 border border-emerald-900 bg-emerald-100 w-full rounded-xl" ref={paraRef}>
This is India Skills 2025-2026 North Regionals Competition. In this task, you are expecyted to highlight the text by mathching with the user input. Add different colors to the different words.<br/>#BanengeBharatKeSkillChampion
        </p>
        <span className="text-xs self-start text-emerald-900/50">Enter one or more comma-separated keywords. Search is case-sensitive.</span>
        <div className="flex gap-3 w-full">
            < input type="text"className="grow w-full border border-emerald-900 rounded-xl outline-none px-4" ref={inputRef} />
            <button className="bg-emerald-900 text-white font-bold px-3 py-1 rounded-xl" onClick={handleSearch}>Search</button>
            <button className="text-emerlad-900 bg-white font-bold  px-3 py-1 rounded-xl" onClick={handleClear}>Clear</button>

        </div>
      </div>
    </div>
}
export default A4;