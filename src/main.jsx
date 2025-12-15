import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import DashboardComponent from './DashboardComponent.jsx'
import NewComponent from './NewComponent.jsx'
import JSXBasics from './JSXBasics.jsx'
import React from 'react';
import LaptopFunction from './LaptopFunction.jsx'
import UniversityClassComp from './UniversityClassComp.jsx'
import StudentFunction from './StudentFunction.jsx'
import CSSExternal from './CSSExternal.jsx'
import CSSInline from './CSSInline.jsx'
import CSSModule from './CSSModule.jsx'
import TailwindExample from './TailwindExample.jsx'
import EventHandling from './EventHandling.jsx'
import EventHandling1 from './EventHandling1.jsx'
import LaptopComponent from './LaptopComponent.jsx'
import UseStateExample from './UseStateExample.jsx'
import UseEffectExample from './UseEffectExample.jsx'
import WithoutUseContext from './UseContext/WithoutUseContext.jsx'
import ProviderComp from './UseContext/ProviderComp.jsx'
import ThemeProvider from './UseContext/ThemeProvider.jsx'
import ParentComp from './UseCallback/ParentComp.jsx'
import ParentTheme from './UseCallback/ParentTheme.jsx'
import UseMemoExample from './UseMemo/UseMemoExample.jsx'
import UseReducerExample from './UseReducerExample.jsx'
import UseReducerExample1 from './UseReducerExample1.jsx'
import UseRefExample1 from './UseRef/UseRefExample1.jsx'
import UseRefExample2 from './UseRef/UseRefExample2.jsx'
import ToggleState from './CustomHook/ToggleState.jsx'
import ControlledComponent from './FormHandling/ControlledComponent.jsx'
import ControlledComponent1 from './FormHandling/ControlledComponent1.jsx'
import UncontrolledComponent from './FormHandling/UncontrolledComponent.jsx'
import FormValidation from './FormHandling/FormValidation.jsx'
import HTTPRequestComp from './HTTPMethods/HTTPRequestComp.jsx'
import HTTPRequestAxios from './HTTPMethods/HTTPRequestAxios.jsx'
import ParentRouting from './Routing/ParentRouting.jsx'
// import ParentRouting2 from './RoutingExample/ParentRouting2.jsx'

import { Provider } from 'react-redux';
// import {store} from './store.jsx';
import {store1} from './store1.jsx'


const firstElt = <h2>This is my new element</h2>

function Laptop() {

  return(
    <div><h3>This is laptop function</h3></div>
  )
  
}

function Box(){
  return(
    <div>
      <h2>This is box component</h2>
      <Laptop/>
      <Laptop />

    </div>
  )
}

class University extends React.Component{

  render(){
    return(
      <div>
        <h1>This is university class component</h1>
      </div>
    )
  }
}

class Student extends React.Component{
  render(){
    return(
      <div>
        <h2>This is Student Class Component</h2>
        <University />
        <University />
      </div>
    )
  }
}


let modelno = 123;
let config = {
  ram : 16,
  ssd : 512
}
createRoot(document.getElementById('root')).render(
  
<Provider store={store1}>
  <App/>
</Provider>
)
