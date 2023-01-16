import logo from './logo.svg';
import './App.css';
import {function_component} from './support/function_component';
import Class_Components from './support/class_component';
import Hello from './support/withoutJSX';
import HelloJSX from './support/withJSX';
import Greet from './support/props';

function App() {
  return (
    <div className="App">
      <Greet name = "Bruce"/>
      <Greet name = "Clark"/>
      <Greet/>
      
      
      {/* function_component */}
      {/* Class_Component s */}
      {/* <HelloJSX/> */}

    </div>
  );
}

export default App;
