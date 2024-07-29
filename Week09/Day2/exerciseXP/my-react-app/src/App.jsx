import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Car from './Components/Car.jsx';
import Events from './Components/Events.jsx';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <Car carinfo={carinfo} />
      <Events/>
    </div>
  );
}

export default App;