import tornPage from "../assets/Torn_page.png";

export const Experience = () => {
  return (
    <div className="relative w-[100%]  mt-[-10%] ">
      <img src={tornPage} alt="" className="h-[min(350vw,145vh)] w-[100vw] object-fill"/>

      <div className="absolute inset-0 flex flex-col justify-center gap-[4vh] px-[6vw] lg:flex-row lg:items-center lg:justify-between lg:gap-[4vw]">

        <div className="w-[88vw] lg:w-[38vw] mt-[2vw]">
          <h2 className="text-[min(8.5vw,5.8vh)] font-black tracking-tight text-white mt-[2vw]">
            <span className="text-[min(9.5vw,9.8vh)] text-red-700">Research</span>  Intern - IIT Indore
          </h2>
          <span className="mt-[1.5vh] block font-mono text-[min(2vw,1.5vh)] font-semibold uppercase tracking-wider text-neutral-400">
            May - June 2026
          </span>
        </div>


        <div className="w-[88vw] lg:w-[46vw] mt-[-5vw] md:mt-[1vw] ">
          <p className="font-black text-[min(3.3vw,3.5vh)] font-bold text-neutral-300 text-red-800">Dry Methane Reforming Microkinetic Modeling</p>
            <p className=" text-[min(2vw,1.5vh)] font-semibold text-neutral-300">C++, SUNDIALS CVODE</p>
          <ul className="mt-[2vh] list-disc space-y-[1.2vh] pl-[4%] text-[min(2.5vw,1.55vh)] leading-relaxed text-neutral-200">
            <li>
              Modeled a 13-species, 17-reaction dual-site catalytic network as a
              system of coupled nonlinear ODEs in C++.
            </li>
            <li>
              Implemented a custom solver from scratch (Newton-Raphson, explicit
              Euler, hand-derived Jacobians) before transitioning to SUNDIALS
              CVODE to handle numerical stiffness.
            </li>
            <li>
              Identified and debugged a convergence issue where poor initial
              conditions caused the solver to settle into a stable-but-incorrect
              steady state.
            </li>
            <li>
              Validated simulation outputs against 14 reference plots from the
              source literature with ~90% overall agreement.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};



