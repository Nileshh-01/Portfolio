import { skillsData } from "../data/skillsData"

export const Skills = ()=>{
    
    return(
        <div>

            <h1 className="text-5xl font-extrabold font-stretch-50% ml-[5%]">SKILLS</h1>

            <div className="flex flex-wrap justify-center gap-[5%] w-[100%] mt-[10%]">
                {
                    skillsData.map((skill)=>(
                        <div className="mb-[5%] w-[26%] aspect-square rounded-xl flex flex-col items-center justify-center text-xs text-white shadow-2xl" key={skill.name}>
                            <img src={skill.icon} alt={skill.name} className="rounded-2xl drop-shadow-[#727272] drop-shadow-xl"/>
                            <p className="text-black">{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}