import { useState } from 'react'
import './App.css'
import { MyImage } from './components/MyImage'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'

function App() {


  return (
    <div className="min-h-[250vh] w-full">
      {/* hero */}
      <div id="hero" className="h-full flex mt-[10%]">
        <MyImage></MyImage>
        <About></About>
        <Skills></Skills>
      </div>

      <Experience></Experience>

      <Projects></Projects>
    </div>
  )
}

export default App
