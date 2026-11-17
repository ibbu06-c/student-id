import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Studentcard from './components/studentcard';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <div className="container" id="students">
        <Studentcard name="fahad" dept="Computer Science" year="3rd Year" />
        <Studentcard name="ibbu" dept="Information Technology" year="3rd Year" />
        <Studentcard name="gokul" dept="Electronics" year="3rd Year" />
      </div>
    </div>
  );
}

export default App;