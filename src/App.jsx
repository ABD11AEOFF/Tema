import { useState } from "react";
import "./App.css";


function App() {
  const [isBlack, setIsBlack] = useState(true);

  const toggleTheme = () => {
    setIsBlack(!isBlack); 
  };

  return (
    <div
      style={{
        backgroundColor: isBlack ? "white" : "black", 
        color: isBlack ? "white" : "black",           
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: isBlack ? "black" : "white", 
          color: isBlack ? "white" : "black",
          border: "2px solid gray",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Переключить тему (Сейчас: {isBlack ? "black" : "white"})
      </button>
    </div>
  );
}

export default App;

