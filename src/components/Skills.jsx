import { skillsData } from "../data/skillsData"

export const Skills = ()=>{
    
    return(
        <div className="ml-[5%] border-2 border-black w-[20%]">

            <h1 className="text-5xl font-extrabold font-stretch-50%">SKILLS</h1>

            <div className="flex flex-wrap justify-center gap-[5%] w-[100%] mt-[10%]">
                {
                    skillsData.map((skill)=>(
                        <div className="bg-black mb-[5%] w-[26%] aspect-square rounded-xl flex items-center justify-center text-xs text-white" key={skill.name}>
                            {skill.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}