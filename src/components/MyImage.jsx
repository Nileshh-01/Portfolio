import modelImg from "../assets/model.png"

export const MyImage = ()=>{
    return(
        <div className="w-[20%] h-[100%] ml-[10%] font-extrabold font-stretch-50% border-2 border-red-950">
            <img src={modelImg} alt="model" className="h-[100%] w-[100%]"/>
        </div>
    )
}