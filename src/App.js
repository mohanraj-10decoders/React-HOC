import './App.css';
import React, { useState } from 'react';
import HOC from './HOC';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className='App'>
      <div className='hoc-title'>React HOC</div>
      <button onClick={() => setFlag(!flag)}>
        {flag ? 'Get Todos' : 'Get Users'}
      </button>
      <div className='container'>{flag ? <Users /> : <Todos />}</div>
    </div>
  );
}

const Users = HOC({ entity: 'users', title: 'Users' });
const Todos = HOC({ entity: 'todos', title: 'To Dos' });

export default App;
