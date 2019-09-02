import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      <ClassClick />

      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroname="Batman" >This is children props</Greet>
      <Greet name="Clark" heroname="Superman" ><button>Action</button></Greet>
      <Welcome name="Bruce" heroname="Batman" />
      <Welcome name="Clark" heroname="Superman"/> */}
    </div>
  );
}

export default App;
