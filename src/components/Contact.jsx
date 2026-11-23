export const Contacts = ()=>{
    return(
        <div className="mt-[7%] ml-[5%] h-[40%]">

            <h1 className="text-5xl font-extrabold font-stretch-50%">CONTACT ME</h1>
            <p className="text-sm font-mono mt-[5%]">Email: nileshboddhul1114@gmail.com</p>
            
            <div className=" flex ml-[2%] gap-[2%] mt-[5%]">
                <a href="" className="h-[10%] w-[10%]"> <img src="src/assets/Gmail.svg" alt="" className="shadow-2xl"/> </a>
                <a href="https://github.com/Nileshh-01" className="h-[10%] w-[10%]"> <img src="src/assets/GitHub.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/nilesh-boddhul01/" className="h-[10%] w-[10%]"> <img src="src/assets/LinkedIn.svg" alt=""/></a>
                


            </div>
            
            <button className="h-[20%] w-[30%] bg-blue-950 text-white rounded-2xl mt-[5%] font-mono font-bold transition duration-600 hover:bg-blue-950 hover:text-white hover:scale-105">Resume</button>
        </div>
    )
}