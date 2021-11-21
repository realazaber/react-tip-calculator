import { useState } from "react";

import "./css/main.css";

function App() {

  const [total, setTotal] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);

  const [finalPrice, setFinalPrice] = useState(0);

  const calculate = () => {
    if (total !== 0 && people !== 0) {

      let tipValue = (total / 100) * tip;
      

      
      console.log("Tip value: " + tipValue);
      console.log("Total: " + total);
      console.log("People: " + people);

      let calculation = (Number(total) + Number(tipValue)) / Number(people);



      setFinalPrice(calculation);  
    }
    
    else if (total === 0 && people !== 0) {
      alert("Please fill in total field.");
    }

    else if (total !== 0 && people === 0) {
      alert("Please fill in people field.");
    }
    else {
      alert("Please fill in total and people fields.");
    }

    
  }

  return (
    <div className="App">
      <main>
        <div id="topBar" className="blackBackground">
          <h1>
            What to tip?
          </h1>
        </div>
        
        <div id="mainContent">
          
          <div className="inputField">
            <label htmlFor="total">
              * Total $: 
            </label>
            <input type="number" id="total" onChange={event => setTotal(event.target.value)}/>
          </div>
                              
          <div className="inputField">
            <label htmlFor="people">
              * Number of people: 
            </label>
            <input type="number" id="people" onChange={event => setPeople(event.target.value)}/>
          </div>
          
          <div className="inputField">
            <label htmlFor="tip">
              Tip %: 
            </label>
            <input type="number" id="tip" onChange={event => setTip(event.target.value)}/>
          </div>
          <button onClick={calculate}>
            Calculate
          </button>
          
        </div>
        <div id="owing">
          <hr />
          <h3>
            Price per person: ${finalPrice}
          </h3>
        </div>
        <footer className="blackBackground">
          &copy; Therealcoolpup
        </footer>
      </main>
    </div>
  );
}

export default App;
