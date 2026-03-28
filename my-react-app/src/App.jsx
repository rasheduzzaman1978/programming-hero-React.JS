import './App.css';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
  const actors = ['Bappa Raj', 'Omar Sani', 'Salman Shah', 'Rajjak'];

  const singers = [
    { id: 1, name: 'Nabil',  age: 20 },
    { id: 2, name: 'Sajid',  age: 18 },
    { id: 3, name: 'Sifat',  age: 12 },
  ];

  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Biology', price: 650},
    {id: 3, name: 'Mathematics', price: 550},
  ]

  return (
    <>
      <h1>React Core Concepts</h1>

        <Library books={books}></Library>

      <h2>Singers</h2>
      {singers.map(singer => (
        <Singer key={singer.id} singer={singer} />
      ))}

      <h2>Actors</h2>
      {actors.map((actor, index) => (
        <Actor key={index} actor={actor} />   // ← এখানে name prop দিলাম
      ))}
    </>
  );
}

export default App;