import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions';

function App() {
  const [value, setValue] = useState(0)
  const [randQ, setrandQ] = useState({
    question: {randQ.question}
  })

  const getQuestion = async () => {
    try {
      const res = await fetch('http://jservice.io/api/random')
      const data = await res.json()
      console.log(data);
      setrandQ(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <div>
        <h2>Score: {value}</h2>
        <button onClick={()=>{setValue(value-1)}}>Decrease</button>
        <button onClick={()=>{setValue(value+1)}}>Increase</button>
        <button onClick={()=>{setValue(0)}}>Reset</button>
      </div>
      <h2>Let's Play!</h2>
      <div>
        <button onClick={getQuestion}>Get Question</button>
        <h3>Question:</h3>
        <h3>Category:</h3>
        <h3>Points:</h3>
      </div>
      <div onClick={() => {}}>
        <h3>Answer:</h3>
      </div>
    </div>
  );
}

export default App;
