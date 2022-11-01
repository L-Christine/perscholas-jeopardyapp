import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = useState()
  const [value, setValue] = useState(0)
  const [randQs, setRandQs] = useState([{
  airdate : "",
  answer : "",
  category : {id: '', title: '', created_at: '', updated_at: '', clues_count: ''},
  category_id : '',
  created_at : "",
  game_id : '',
  id : '',
  invalid_count : null,
  question : "",
  updated_at : "",
  value : ''
  }])

  const jeopardyURL = 'http://jservice.io/api/random'

  const getQuestion = async () => {
    try {
      const res = await fetch(jeopardyURL)
      const data = await res.json()
      setRandQs(data)//save the data in state
    } catch (error) {
      console.log(error);
    }
  }

//==Disabled. auto-generates a question
// useEffect(() => {
//   getQuestion()
// }, [])

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

      <button onClick={()=> getQuestion(randQs)}>Get Question</button>

      <div className='qBoard'>
        <h3>Question: {randQs[0].question}</h3>
        <h3>Category: {randQs[0].category.title}</h3>
        <h3>Points: {randQs[0].value}</h3>
      </div>

      <div className='ansBoard' onClick={()=>setShow(!show)}>
        {show ? <h3>Answer: {randQs[0].answer}</h3> : <h3>Click to Reveal Answer</h3>}
      </div>
    </div>
  );
}

export default App;
