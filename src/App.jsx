import "./App.css";

// import logo
import calculatorLogo from "./assets/calculator.png";

// import du 'state'
import { useState } from "react";

function App() {
  //créer le state
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <img src={calculatorLogo} alt="calculator" />
        <h1>React Counter</h1>
      </header>
      <main>
        <div className="counterButtons">
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            {counter === 0 ? <p></p> : <p>-</p>}
          </button>
          <p className="counter">{counter}</p>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {counter === 10 ? <p></p> : <p>+</p>}
          </button>
        </div>
        <div>
          <button
            className="reset"
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur </span>by
          Elodiiiiiie
        </p>
      </footer>
    </>
  );
}

export default App;
