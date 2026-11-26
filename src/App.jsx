import { useState } from 'react'
import './App.css'
import { MyImage } from './components/MyImage'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contacts } from './components/Contact'
import { ResumePrinter } from './components/ResumePrinter'

function App() {


  return (
    <div className="w-full overflow-x-hidden">

      {/* hero */}
      <div id="hero" className="h-full flex flex-col mt-[4vh] items-center gap-[5vh] px-[6vw] lg:mt-[10vh] lg:flex-row lg:items-stretch lg:justify-center lg:gap-[4vw] lg:px-[5vw]">
        <MyImage></MyImage>
        <About></About>
        
        <div className="w-[min(88vw,42vh)] border-[min(0.4vw,0.2vh)] p-[4vw] border-black lg:p-[1.2vw]">
          <Skills></Skills>
          <Contacts></Contacts>
          <ResumePrinter></ResumePrinter>
        </div>
      </div>

      <Experience></Experience>

      <Projects></Projects>
    </div>
  )
}

export default App
