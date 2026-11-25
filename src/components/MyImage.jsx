import modelImg from "../assets/model.png"

export const MyImage = ()=>{
    return(
        <div className="flex w-[min(60vw,36vh)] items-end justify-center font-extrabold font-stretch-50% border-2 border-red-950">
            <img src={modelImg} alt="model" className="h-[100%] w-[100%]"/>
        </div>
    )
}