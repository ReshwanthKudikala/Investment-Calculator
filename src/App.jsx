import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';


function App() {
  const [userInput,SetUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 5,
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier,newValue){
    SetUserInput((prevUserInput)=>{
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    });
  }
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p>please enter a duration greater than zero</p> }
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
