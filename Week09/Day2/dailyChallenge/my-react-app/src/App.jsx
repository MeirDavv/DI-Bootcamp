import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const increase = (index) => {
    const newLanguages = [...languages];
    ++newLanguages[index].votes;
    setLanguages(newLanguages)
  }

  return (
    <div>
      <h1>Vote Your Language!</h1>
    {
      languages.map((language, index)=>{
        return (
        <ul className='row' key={index}>
          <li>{language.votes}</li>
          <li>{language.name}</li>
          <li><button onClick={() => increase(index)}>Click here</button></li>
          {}
        </ul>
          )
      })
      
    }
    </div>
  )
}

export default App
