import { skillsData } from "../data/skillsData"

export const Skills = ()=>{
    
    return(
        <div className="w-full">

            <h1 className="text-[12vw] lg:text-[4vw] font-RebeqaExtraBold font-extrabold font-stretch-50% ml-[5%]">SKILLS</h1>

            <div className="flex flex-wrap justify-center gap-x-[6%] gap-y-[3vh] lg:gap-x-[5%] lg:gap-y-[2vh] w-[100%]">
                {
                    skillsData.map((skill)=>(
                        <div className="group w-[20vw] lg:w-[5vw] aspect-square rounded-full flex flex-col items-center justify-center text-xs" key={skill.name}>
                            <img src={skill.icon} alt={skill.name} className="rounded-[3vw] lg:rounded-[1vw] drop-shadow-white-[10px_10px_10px] shadow-2xl contrast-110 hover:contrast-125 group-hover:scale-110 transition"/>
                            <p className="text-black text-[3vw] lg:text-[1.8vw] font-RebeqaMedium">{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}