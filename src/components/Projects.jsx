import { ProjectsData } from "../data/ProjectsData.js"
import { useState } from "react"

export const Projects = ()=>{

    const [activeId,setActiveid] = useState(null);
    return(
        <>
        {/* <h1 className="flex text-[min(13vw,12vh)] font-extrabold font-Kastemo justify-center mt-[-10%]">The <span className="text-red-800 text-[min(15vw,20vh)] mt-[-10.4vh]">stuff</span></h1>
        <h1 className="flex text-[min(13vw,18vh)] font-extrabold font-Kastemo justify-center mt-[-8%] ml-[0%]">I </h1>
        <span className="flex  font-extrabold font-Kastemo justify-center mt-[-8.6%] text-[min(15vw,20vh)] text-red-900 ml-[3%]">cooked</span> */}

        <h1 className="flex text-[min(11vw,12vh)] font-extrabold font-Kastemo justify-center mt-[-10%] ml-[0%]">The <span className="text-red-800 text-[min(17vw,20vh)] mt-[-6vh] md:mt-[-10.4vh]">&nbsp;stuff</span></h1>

        <span className="flex  font-extrabold font-Kastemo justify-center mt-[-5.6%] text-[min(15vw,20vh)] text-[#7d0000] ml-[20%]"> <span className="text-[min(10vw,15vh)] font-serif font-medium mt-[6.6%] text-black">i </span>&nbsp;cooked</span>

        <div className="mt-[5%] mb-[5%] flex flex-wrap gap-[5vh] justify-around">
            {
                ProjectsData.map((project)=>{
                    const isOpen = (project.id===activeId);
                    return(
                    <div onClick={()=> setActiveid(isOpen? null : project.id)} className="group h-[45vh] w-[min(80vw,36vh)] gap-y-[20%] bg-white shadow-[10px_10px_20px_black]" key={project.id}>
                        
                        <div className="relative ml-[3%] mt-[3%] h-[30vh] w-[94%] bg-black">
                            <img src={project.image} alt={project.title} className={`relative h-[100%] w-[100%] bg-gray-400 z-10 transition-opacity duration-900 group-hover:opacity-0 pointer-events-none ${isOpen? "opacity-0":"opacity-100"}`}/>
                            <div className="absolute inset-0 p-[5%] text-xs text-white  overflow-y-auto">
                                {
                                    project.bullets.map((bullet,i)=>(
                                        <p className="mb-[2%] text-[min(4vw,1.6vh)]" key={i}>- {bullet}</p>
                                    ))
                                }
                                <div className="absolute bottom-[4%]">
                                    <a href={project.githubUrl}><p className="mb-[2%] mt-[10%] text-bold text-[min(4vw,2vh)]">GitHub ↗</p></a>
                                    {project.title!="Pathfinding Visualizer"? <a href={project.liveUrl}><p className="text-[min(4vw,2vh)] text-bold">Live Link ↗</p></a> : <></>}
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[min(40vw,2vh)] ml-[3%] mt-[2%] font-mono">{project.title}</h2>
                        <div className="flex mt-[2%]">
                            {
                                project.stack.map((stack,i)=>(
                                    <div className="text-[min(2.5vw,1.4vh)] ml-[3%]" key={i}>
                                        {stack}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="font-mono text-[min(20vw,1.2vh)] text-neutral-400 ml-[3%]">
                        {isOpen ? "✕" : "info ↗"}
                        </div>
                    </div>
                    )
                })
            }
        </div>
        </>
    )
}