import React from 'react';
import logo from './logo.svg';
import {useDispatch,useSelector} from 'react-redux'
import './App.css';
import {fetchAllTodoReq} from './store/todo/todo-action';

function App() {
  const dis = useDispatch();


  React.useEffect(()=>{
    dis(fetchAllTodoReq())
  },[dis])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
