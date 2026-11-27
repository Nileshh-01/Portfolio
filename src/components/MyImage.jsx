import { useEffect } from "react";
import { useState } from "react";
import modelImg from "../assets/model2.png"
import f1 from "../assets/spin/frame1.png";
import f2 from "../assets/spin/frame2.png";
import f3 from "../assets/spin/frame3.png";
import f4 from "../assets/spin/frame4.png";
import f5 from "../assets/spin/frame5.png";
import f6 from "../assets/spin/frame6.png";
import f7 from "../assets/spin/frame7.png";
import f8 from "../assets/spin/frame8.png";
import f9 from "../assets/spin/frame9.png";
import f10 from "../assets/spin/frame10.png";


export const MyImage = ()=>{
    const [index, setIndex] = useState(0);
    const frames = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

    useEffect(() => {
        frames.forEach((src) => {
        const img = new Image();
        img.src = src;
        });

        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % frames.length);
        }, 500); 

        return () => clearInterval(interval);
    }, []);
    return(
        <div className="flex relative h-[min(90vw,78vh)] w-[min(60vw,36vh)] items-end justify-center shrink-0 border-2 border-red-950 overflow-hidden">
            {frames.map((src, i) => (
        <img key={i} src={src} alt="Nilesh Boddhul" 
        // className={`absolute scale-[0.77] inset-0  h-full w-full origin-bottom object-contain object-bottom select-none 
        //     ${
        //         i === index ? "opacity-100" : "opacity-0"
        //     }`}
        className={`absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 origin-bottom select-none ${
          i === index ? "opacity-100" : "opacity-0"
        }`}
        />
      ))}
        </div>
    )
}