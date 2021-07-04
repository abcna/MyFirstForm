import logo from "./logo.svg";
import "./App.css";
import Formbuilder from "./Components/Formbuilder";
const inputs = [
  {
    name: 'firstname',
    type : 'text' , 
    placeholder : 'Enter your firstname',
    label: 'first Name',
    help : 'u should fill a uniqe name' 
     
  },
  {
    name: 'lastname',
    type : 'text' , 
    placeholder : 'Enter your lastname',
    label: 'Last Name'
  },
  {
    name: 'age',
    type : 'text' , 
    defaultValue: 'yy/mm/dd' ,
    placeholder : 'Enter your age',
    label: 'Age'
  },
  {
    name: 'phoneNumber',
    type : 'number' , 
    placeholder : 'Enter your phone Number',
    label: 'phone-Number'
  },
  {
    name: 'Email',
    type : 'Email' , 
    placeholder : 'Enter your Email Addres',
    label: 'Email'
  },
  {
    name: 'I used covid vax' ,
    type: 'checkbox' , 
    label: 'covid'
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
