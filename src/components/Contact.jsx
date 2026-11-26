export const Contacts = ()=>{
    return(
        <div className="mt-[0%] ml-[5%] h-[22%]">

            <h1 className="text-[8vw] lg:text-[2.5vw] font-extrabold  font-stretch-50%">CONTACT ME</h1>
            <p className="text-[3vw] lg:text-[0.9vw] font-mono font-medium mt-[0%] ml-[2%] text-wrap">Email: nileshboddhul1114@gmail.com</p>
            
            <div className="flex ml-[2%] gap-[2%] mt-[3%]">
                <a href="" className="w-[8vw] lg:w-[2vw]"> <img src="src/assets/Gmail.svg" alt="" className="shadow-2xl"/> </a>
                <a href="https://github.com/Nileshh-01" className="w-[8vw] lg:w-[2vw]"> <img src="src/assets/GitHub.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/nilesh-boddhul01/" className="w-[8vw] lg:w-[2vw]"> <img src="src/assets/LinkedIn.svg" alt=""/></a>
                


            </div>
            
            {/* <button className="h-[20%] w-[7vw] bg-blue-950 text-white rounded-2xl text-[1vw] mt-[5%] font-mono font-bold transition duration-600 hover:bg-blue-950 hover:text-white hover:scale-105">Resume</button> */}
        </div>
    )
}