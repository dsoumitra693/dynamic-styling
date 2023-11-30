import { useState } from 'react';
import './App.css';
import Client from './client';
import Dev from './dev';


function App() {
  let [userType, setUserType] = useState('')
  let [value, setValue] = useState('')


  if (!userType) return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => { setUserType(value.toLocaleLowerCase()) }}>Submit</button>
    </div>
  )


  return (
    <div className="App">
      {userType === "client" ? <Client /> :
        (userType === "dev" ? <Dev /> : null)}
    </div>
  );
}

export default App;
