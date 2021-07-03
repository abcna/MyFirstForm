import logo from "./logo.svg";
import "./App.css";
import Formbuilder from "./Components/Formbuilder";

function App() {
  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row justify-content-center">
        <div className="col-4">
          <Formbuilder />
        </div>
      </div>
    </div>
  );
}

export default App;
