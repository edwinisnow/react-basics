import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

import './appStyles.css';
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}

      {/* <PersonList /> */}
      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <EventBind /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

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
