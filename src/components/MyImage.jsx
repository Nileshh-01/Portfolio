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
        }, 1020); // Adjust ms for faster/slower stop-motion speed

        return () => clearInterval(interval);
    }, []);
    return(
        <div className="flex w-[min(60vw,36vh)] items-end justify-center font-extrabold font-stretch-50% border-2 border-red-950 overflow-hidden">
            <img src={frames[index]} alt="model" className="h-[100%] w-[100%] scale-[1] object-contain origin-bottom object-bottom"/>
        </div>
    )
}