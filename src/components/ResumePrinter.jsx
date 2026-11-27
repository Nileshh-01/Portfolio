import { useState, useEffect } from "react";

export const ResumePrinter = () => {
  const [open, setOpen] = useState(false);
  const [printed, setPrinted] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setPrinted(true), 80);
      return () => clearTimeout(timer);
    } else {
      setPrinted(false);
    }
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="font-Runiga mt-[2%] md:mt-[-3.5%] ml-[3%] cursor-pointer rounded-xl bg-neutral-950 px-[12%] py-[5%] text-[3vw] lg:text-[1.1vw] font-bold text-white shadow-md transition hover:bg-neutral-800 active:scale-95">
        Print Resume
      </button>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex flex-col items-center justify-start overflow-y-auto bg-black/50 px-[3%] py-[4vh] backdrop-blur-md">
          <div onClick={(e) => e.stopPropagation()} className="flex w-[min(90vw,68vh)] flex-col items-center">
            {/* Download*/}
            <div className="mb-[1.5vh] flex w-[100%] items-center justify-end gap-[2%]">
              <a href="/Nilesh_Boddhul_NITW_Resume.pdf" download className="rounded-lg bg-black px-[3%] py-[1.2%] text-[min(3vw,1.8vh)] font-bold text-white shadow transition hover:bg-neutral-800">
                Download PDF ↓
              </a>

              <button onClick={() => setOpen(false)} className="cursor-pointer rounded-lg bg-white px-[2.5%] py-[1.2%] text-[min(3vw,1.8vh)] font-bold text-black shadow transition hover:bg-neutral-200">
                ✕ Close
              </button>
            </div>


            <div className="relative z-20 flex h-[3.2vh] w-[100%] items-center justify-center rounded-full bg-neutral-900 shadow-2xl">
              <div className="h-[30%] w-[94%] rounded-full bg-black shadow-inner" />
            </div>


            <div className="-mt-[1vh] w-[92%] overflow-hidden pb-[5vh]">
              <div className={`relative border border-neutral-300 bg-[#FAF9F6] p-[4%] text-neutral-900 shadow-2xl transition-transform duration-[1400ms] ease-out ${
                  printed ? "translate-y-0" : "-translate-y-[105%]"
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2vh] bg-gradient-to-b from-black/20 to-transparent" />

                <img src="/Nilesh_Boddhul_NITW_Resume.png" alt="Nilesh Boddhul Resume" className="block h-auto w-[100%]"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};