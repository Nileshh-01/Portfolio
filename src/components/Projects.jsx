import { ProjectsData } from "../data/ProjectsData.js"

export const Projects = ()=>{
    return(
        <>
        <h1 className="flex text-7xl font-extrabold justify-center mt-[3%]">THE STUFF I COOKED</h1>
        <div className="mt-[5%] flex gap-[5%] justify-around">
            {
                ProjectsData.map((project)=>(
                    <div className="h-[45vh] w-[20%] bg-white" key={project.id}>
                        <img src={project.src} alt={project.title} className="h-[30vh] w-[94%] ml-[3%] mt-[3%] bg-gray-400"/>
                        <h2 className="min-text-xl ml-[3%] mt-[2%] font-mono">{project.title}</h2>
                    </div>
                ))
            }
        </div>
        </>
    )
}