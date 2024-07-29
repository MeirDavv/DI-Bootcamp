import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


class Component {
   constructor(val){
    this.name = '...',
    this.value = val
   }
   getName(){
    return this.name
   }
   setValue(val){
    this.value = val
   }
}

class SubComponent extends Component{
  constructor(){
    super()
    this.param = '...'
  }
  setParam(param){
    this.param = param
  }
  getName(){
    return name='my_name'
  }
}