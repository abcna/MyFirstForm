import logo from "./logo.svg";
import "./App.css";
import Formbuilder from "./Components/Formbuilder";
const inputs = [
  {
    name: 'firstname',
    type : 'input' , 
    placeHolder : 'Enter your firstname',
    help : 'first name' , 
  },
  {
    name: 'lastname',
    type : 'input' , 
    placeHolder : 'Enter your lastname',
  },
  {
    name: 'age',
    type : 'input' , 
    placeHolder : 'Enter your age',
  }
]

function App() {
  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row justify-content-center">
        <div className="col-4">
          <Formbuilder inputs={inputs} />
        </div>
      </div>
    </div>
  ); 
}

export default App;
