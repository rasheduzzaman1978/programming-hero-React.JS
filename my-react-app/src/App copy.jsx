import ToDo from './todo'
import './App.css'
import Actor from './Actor';

function App() {
  const actors = ['Bappa Raj', 'Omar Sani', 'Salman Shah', 'Rajjak'];

  return (
    <>
     <h1>React core Concepts</h1>
    
    {
      actors.map(actor => <Actor name={actor} ></Actor>)
    }


    {/* <ToDo task='Learn React' isDone={true} time={time} ></ToDo>
    <ToDo task='Learn JS' isDone={false}></ToDo>
    <ToDo task='Take a shower' isDone={false} time="100"></ToDo> */}

      {/* <Person name="Md. Rasheduzzaman" age="46" profession="Teacher"></Person>
      <Person name="Bilkis Khatun" age="40" profession="Housewife"></Person>
      <Person name="Ridwan Sajid" age="46" profession="Teacher"></Person>  
      <Person name="Sifat Abdullah" age="46" profession="Teacher"></Person>
      
      <Fruits></Fruits>
      
      <Student name="Ridwan Sajid" sClass='Ten' roll='91'></Student>
      <Student name="Sifat Abdullah" sClass='Six' roll='92'></Student>

      <Developer name="Md. Rasheduzzaman" tech="JavaScript"></Developer>
      <Developer name="Ridwan Sajid" tech="Python"></Developer>
      <Developer name="Sifat Abdullah" tech="JavaScript"></Developer>

      <Player name="Sakib" run='5005'></Player>
      <Player name="Tamim" run='8005'></Player>

      <Salami event="Eid-ul-Fitr" amount="100"></Salami>
      <Salami event="Eid-ul-Azha" amount="200"></Salami> */}
    </>
  )
}

function Person (props) {
  // const age = 46;
  // const profession = 'Teacher';
  return (
    <div className='student'>
    <h3>Name: {props.name} </h3>
    <p>He/She is {props.age} years old.</p>
    <p>He/She is a {props.profession}.</p>
    </div>
  )
}

const fruitStyle = {
  color: 'red',
  fontSize: '20px',
  backgroundColor: 'gray',
  borderRadius: '10px',
  padding: '10px',
}

function Fruits (){
  return (
    <>
    <h3 style={fruitStyle}>My favourite Fruits</h3>
    <ul>
      <li>Mango</li>
      <li>Banana</li>
      <li>Jackfruit</li>
    </ul>
    </>
  )
}

// const {name, run} = {name: 'Sakib', run: '5005'}
function Player ({name, run}) {
  return (
    <div className='student'>
      <h3>Players Info</h3>
      <h3>Name: {name} </h3>
      <p>Run: {run} </p>
    </div>
  )
}


function Student ({name, sClass, roll}) {
  return (
    <div className='student'>
      <p>Name: {name} </p>
      <p>Class: {sClass} </p>
      <p>Roll: {roll} </p>
    </div>
  )
}

function Developer (props) {
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '15px',
      margin: '10px',
      padding: '20px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

function Salami ({event, amount}) {
  return (
    <div className='salami'>
      <p>Occation: {event} </p>
      <p>Amount: {amount} </p>
    </div>
  )
}

export default App
