import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="text-center">
          This project was coded by Emilia Podmore, it is{" "}
          <a
            href="https://github.com/EmiliaPodmore/react-weather"
            target="_blank"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
