// App.js
import React, {useEffect} from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeSwitcher from './ThemeSwitcher';
import './App.css';

function ThemedApp(){
  const {theme } = useTheme();

  useEffect(()=> {
    document.body.className=theme;
  },[theme]);

  return(
    <div className="App">
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher/>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp/>
    </ThemeProvider>
  );
}

export default App;