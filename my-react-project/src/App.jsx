import Batsman from '../Batsman'
import './App.css'
import Bowler from './Bowler'
import Counter from './Counter'

function App() {
  
function handleClick() {
  alert('I am clicked.')
}
  const handleClick3 = () => {
    alert('Clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      <h3>Vite + React</h3>

      <Bowler></Bowler>

      <Batsman></Batsman>


      <Counter></Counter>

      {/* {
        <button onclick="handleClick()">Click Me</button>
      } */}

      {
        <button onClick={handleClick}>Click Me</button>
      }
       { <button onClick={function handleClick2() {
          alert('Clicked 2')
        }}>Click Me 2</button>
      }

      <button onClick={handleClick3}>Click me 3</button>
      
      <button onClick={() => alert('Clicked 4')}>Click me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
