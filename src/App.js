// import logo from './logo.svg';
import './App.css';
import { useEffect,useState} from 'react';

function App() {
 const [quote,setQuote] = useState({})

  function fetchQuote(){
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {console.log(data);setQuote(data)})

  }

 
  useEffect(() => {
    fetchQuote()
  }, [])

  return (
  <div className='container'>
    <h1 className='quote'>"{quote.content}"</h1>
    <h2 className='author'>{quote.author}</h2>
    <button onClick={fetchQuote} className='btn'> Generate quote</button>
  </div>
  );
}

export default App;
