import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';
import Condition from './condition'
function App() {

  /*function changeAttribute (e){
    let change_val= e;
     parentVar= change_val;
  }   */
  const [parentVar, setName]=React.useState('I am parent attribute')
 
  return (
    <div className="App">
      <header className="App-header">
      <h1> {parentVar} </h1>
      </header>
     
       
      <Child parentVar={parentVar} changeParent={(val) =>{
        setName(val)}
        }> </Child> 
        <Conditon/>
    </div>
  );
}

export default App;
