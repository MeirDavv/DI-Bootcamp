import React,{useRef} from "react";
import { useState } from "react";

function CharacterCounter() {
    const inputRef = useRef(null);
    const [length, setLength] = useState(null)
  
    const handleInputChange = () => {
      const textLength = inputRef.current.value.length;
      setLength(textLength)
    };
  
    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Type something..."></textarea>
        <p>Character Count: {length}</p>
      </div>
    );
  }

  export default CharacterCounter;