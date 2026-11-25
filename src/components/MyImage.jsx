import modelImg from "../assets/model.png"

export const MyImage = ()=>{
    return(
        <div className="flex h-[45vh] w-[40vw] lg:h-auto lg:w-[22vw] items-end justify-center font-extrabold font-stretch-50% border-2 border-red-950">
            <img src={modelImg} alt="model" className="h-[100%] w-[100%]"/>
        </div>
    )
}