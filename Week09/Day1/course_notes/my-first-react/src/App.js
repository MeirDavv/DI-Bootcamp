import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import User from "./User"

const usersJson = require('./users.json');




function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        Hello..
        {/* <Hello title="my title 1" sub="my subtitle 1"/>
        <Hello title="my title 2" sub="my subtitle 2"/> */}
        {
          usersJson.map((item,index)=>{
            return <User {...item} key={index}/>
          })
        }
        
      </header>

    </div>
  )
}

export default App;

