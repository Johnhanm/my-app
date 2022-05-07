import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <button
      onClick={(e) => {
        setNumber(number + 1);
      }}
    >
      {number}
    </button>
  );
}

export default App;
