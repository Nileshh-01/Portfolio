import { ProjectsData } from "../data/ProjectsData.js"

export const Projects = ()=>{
    return(
        <>
        <h1 className="flex text-7xl font-extrabold justify-center mt-[10%]">THE STUFF I COOKED</h1>
        <div className="mt-[5%] flex gap-[5%] justify-around">
            {
                ProjectsData.map((project)=>(
                    <div className="group h-[45vh] w-[20vw] bg-white shadow-[10px_10px_20px_black]" key={project.id}>
                        
                        <div className="relative ml-[3%] mt-[3%] h-[30vh] w-[94%] bg-black">
                            <img src={project.image} alt={project.title} className="relative h-[100%] w-[100%] bg-gray-400 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"/>
                            <div className="absolute inset-0 p-[5%] text-xs text-white  overflow-y-auto">
                                {
                                    project.bullets.map((bullet)=>(
                                        <p className="mb-[2%]">- {bullet}</p>
                                    ))
                                }
                                <a href={project.githubUrl}><p className="mb-[2%]">GitHub ↗</p></a>
                                <a href={project.liveUrl}><p>Live Link ↗</p></a>
                            </div>
                        </div>

                        <h2 className="min-text-xl ml-[3%] mt-[2%] font-mono">{project.title}</h2>
                    </div>
                ))
            }
        </div>
        </>
    )
}