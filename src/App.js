import logo from './logo.svg';
import './App.css';
import './style.css';
import GuineaPigsContainer from "./containers/GuineaPigsContainer";

function App() {
  return (
    <div className="App">
      <main>
        <GuineaPigsContainer />
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Guinea Pig Gallery</p>
      </footer>
    </div>
  );
}

export default App;
