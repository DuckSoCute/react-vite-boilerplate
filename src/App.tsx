import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <div className='logos'>
        <a href='https://reactjs.org/'>
          <img
            alt='react'
            className='logo'
            src='/assets/react.svg'
            width={100}
          />
        </a>
        <a href='https://vitejs.dev/'>
          <img
            alt='react'
            className='logo'
            src='/assets/vite.svg'
            width={100}
          />
        </a>
      </div>

      <h1>React Vite Boilerplate</h1>
      <p>A simple boilerplate to use React with Vite</p>

      <button onClick={() => setCount((c) => c + 1)}>Count is: {count}</button>
    </div>
  );
}
