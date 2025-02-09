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
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import { ComponentC } from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import { PostList } from './components/PostList';


function App() {
  return (
    <div className="App">

      <PostList />

      {/* <UserProvider value="John">
        <ComponentC />
      </UserProvider> */}


      {/* <CounterTwo>
        {(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />}
      </CounterTwo>
      <CounterTwo>
        {(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />}
      </CounterTwo> */}


      {/* <CounterTwo render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
      <CounterTwo render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} /> */}

      {/* <User render={(isLoggedIn) => isLoggedIn ? 'User' : 'Guest'} />
      <HoverCounterTwo />
      <ClickCounterTwo /> */}

      {/* <HoverCounter />
      <ClickCounter name="John" /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}

      {/* <FRParentInput /> */}

      {/* <FocusInput /> */}

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
