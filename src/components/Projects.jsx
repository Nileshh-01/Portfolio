import { ProjectsData } from "../data/ProjectsData.js"
import { useState } from "react"

export const Projects = ()=>{

    const [activeId,setActiveid] = useState(null);
    return(
        <>
        <h1 className="flex text-[min(13vw,14vh)] font-extrabold justify-center mt-[10%]">THE STUFF</h1>
        <div className="mt-[5%] flex flex-wrap gap-[5vh] justify-around">
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
                                        <p className="mb-[2%] text-[0.9vw]" key={i}>- {bullet}</p>
                                    ))
                                }
                                <div className="absolute bottom-[4%]">
                                    <a href={project.githubUrl}><p className="mb-[2%] mt-[10%] text-bold text-[1.2vw]">GitHub ↗</p></a>
                                    {project.title!="Pathfinding Visualizer"? <a href={project.liveUrl}><p className="text-[1.2vw] text-bold">Live Link ↗</p></a> : <></>}
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[1.25vw] ml-[3%] mt-[2%] font-mono">{project.title}</h2>
                        <div className="flex mt-[2%]">
                            {
                                project.stack.map((stack,i)=>(
                                    <div className="text-[0.8vw] ml-[3%]" key={i}>
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