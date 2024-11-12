import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/Display.jsx"
import Buttons from "./components/Buttons.jsx"
import { useState } from "react"

function App() {

  const [currentValue, changeValue] = useState([]);

  const buttonHandele = (event) => {
    let newVal = (event.target.innerText);

    if (event.target.innerText === 'CA') {
      changeValue("");

    } else if (event.target.innerText === 'DEL') {
      changeValue(currentValue.toString().slice(0, -1));

    } else if (event.target.innerText === '=') {
      let cal = eval(currentValue);
      changeValue(cal);

    } else {
      let newArr = currentValue + newVal;
      changeValue(newArr);

    }
  }

  return (
    <center>
      <div className="box-container">
        <Display currentValue={currentValue} />
        <Buttons buttonHandele={buttonHandele} />

      </div>
    </center>
  )
}

export default App
