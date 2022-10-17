import logo from './logo.svg';
import './App.css';
import { Component1 } from './Components/Component1';
import { Component2 } from './Components/Component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nunca he usao esto illo
        </p>
        <a
          className="App-link"
          href="https://citmalumnes.upc.es/~davidps9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi web towapa
        </a>
        <hr/>
        <Component1/>
        <br/>
        <Component2/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </header>
     
    </div>
  );
}

export default App;
