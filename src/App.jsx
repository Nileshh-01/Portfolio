import { useState } from 'react'
import './App.css'
import { MyImage } from './components/MyImage'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contacts } from './components/Contact'


function App() {


  return (
    <div className="min-h-[300vh] w-full">
      {/* hero */}
      <div id="hero" className="h-full flex mt-[5%]">
        <MyImage></MyImage>
        <About></About>
        
        <div className="ml-[5%] border-[0.15vw] border-black w-[22%]">
          <Skills></Skills>
          <Contacts></Contacts>
        </div>
      </div>

      <Experience></Experience>

      <Projects></Projects>
    </div>
  )
}

export default App
