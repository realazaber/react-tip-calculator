import react, { useState } from "react";

import "./css/main.css";



function App() {

  const [total, setTotal] = useState(0);


  const calculateTotal = () => {
    
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
              Total: 
            </label>
            <input type="number" id="total" />
          </div>
                              
          <div className="inputField">
            <label htmlFor="people">
              Number of people: 
            </label>
            <input type="number" id="people" />
          </div>
          
          <div className="inputField">
            <label htmlFor="tip">
              Tip %: 
            </label>
            <input type="number" id="tip" />
          </div>
        </div>
        <div id="owing">
          <hr />
          <h3>
            Price per person: ${total}
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
