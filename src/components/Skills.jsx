import { skillsData } from "../data/skillsData"

export const Skills = ()=>{
    
    return(
        <div>

            <h1 className="text-[4vw] font-extrabold font-stretch-50% ml-[5%]">SKILLS</h1>

            <div className="flex flex-wrap justify-center gap-[5%] w-[100%] mt-[5%]">
                {
                    skillsData.map((skill)=>(
                        <div className="group mb-[5%] w-[5vw] aspect-square rounded-full flex flex-col items-center justify-center text-xs" key={skill.name}>
                            <img src={skill.icon} alt={skill.name} className="rounded-2xl drop-shadow-white-[10px_10px_10px] contrast-110 hover:contrast-125 group-hover:scale-110 transition"/>
                            <p className="text-black text-[0.8vw]">{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}