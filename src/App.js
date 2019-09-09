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
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';


function App() {
  return (
    <div className="App">

      <FocusInput />

      {/* <RefsDemo /> */}

      {/* <ParentComp /> */}

      {/* <PureComp /> */}

      {/* <Table /> */}
      {/* <FragmentDemo /> */}

      {/* <LifeCycleA /> */}

      {/* <Form /> */}

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
