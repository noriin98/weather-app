import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className='container'>
     <Weather defaultCity="Paris" />
     <footer>
     This project was coded by Noreen Akhtar and is <a href="https://github.com/noriin98/weather-app">open-sorced on Github</a></footer>
     </div>
     </div>
  );
}

