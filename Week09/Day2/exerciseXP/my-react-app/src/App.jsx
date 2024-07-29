import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Car from './Components/Car.jsx';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <Car carinfo={carinfo} />
    </div>
  );
}

export default App;