import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions';

function App() {
  
  const getQuestion = async () => {
    try {
      const res = await fetch('http://jservice.io/api/random')
      const data = await res.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <h2>Score:</h2>
      <button onClick={()=>{}}>Decrease</button>
      <button onClick={()=>{}}>Increase</button>
      <button onClick={()=>{}}>Reset</button>
      <h2>Let's Play!</h2>
      <button onClick={getQuestion}>Get Question</button>
      
    </div>
  );
}

export default App;
