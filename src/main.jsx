import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LaptopFunction from './LaptopFunction.jsx'
import UniversityClassComp from './UniversityClassComp.jsx'
import StudentFunction from './StudentFunction.jsx'
import CssInline from './cssinline.jsx'
import CSSExternal from './CSSExternal.jsx'
import Food from './food.jsx'
//import TailwindExample from './TailwindExample.jsx'
// import './Tailwindcss.css'
import UseStateExample from './UseStateExample.jsx'
import UseStateExample2 from './UseStateExample2.jsx'
import UseEffectExample from './UseEffectExample.jsx'
import UseEffectExample2 from './UseEffectExample2.jsx'
import UseReducerExample1 from './UseReducerExample1.jsx'
import HTTPRequestComp from './HTTPRequestComp.jsx'
import HTTPExample from './HTTPExample.jsx'
import HTTPRequestAxios from './HTTPRequestAxios.jsx'
import ParentRouting from './Routing/ParentRouting.jsx'
export function Laptop() {
  return (
    <div>
      <h3>This is the Laptop Component</h3>
    </div>
  )
}

export function Box() {
  return (
    <div>
      <h3>This is the box component</h3>
      <Laptop />
    </div>
  )
}

export class University extends React.Component {
  render() {
    return (
      <div>
        <h2>This is the University Component</h2>
      </div>
    )
  }
}

export class School extends React.Component {
  render() {
    return (
      <div>
        <h2>This is School Component</h2>
        <University />
      </div>
    )
  }
}

// removed unused configuration and version variables (not required by the app)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ParentRouting />
  </StrictMode>
)

