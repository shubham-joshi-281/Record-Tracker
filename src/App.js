import Header from "./Components/Header";
import './Components/Header.css'
import './Components/Navbar.css'
import './Components/Note.css'
import './App.css'
import Navbar from "./Components/Navbar";
import Note from "./Components/Note";
function App() {
  return (
    <>
      <Header />
      <div className="section-1">
        <Navbar />
        <Note />
      </div>
    </>
  );
}

export default App;
