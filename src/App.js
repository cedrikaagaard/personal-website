import React from 'react'

import Welcome from './sections/Welcome'
import About from './sections/About'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import CubeRobot from './sections/CubeRobot'

import './App.sass'
import 'react-vertical-timeline-component/style.min.css'
import 'react-awesome-button/dist/styles.css'
import './button.css'

const App = () => (
    <div className='App'>
        <Welcome/>
        <About/>
        <Skills/>
        <Resume/>
        <Contact/>
        <CubeRobot/>
    </div>
)

export default App
