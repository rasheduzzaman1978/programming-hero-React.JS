import Batsman from './Batsman';
import './App.css';
import Bowler from './Bowler';
import Counter from './Counter';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';
import ShowHideText from './ShowHideText ';
import DarkModeToggle from './DarkModeToggle';
import ToDoList from './ToDoList';
import CharacterCounter from './CharacterCounter';
import ShowHidePassword from './ShowHidePassword';
import Comments from './Comments';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts =async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

const fetchComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();
  return data.slice(0, 10);
}


function App() {

  // const postsPromise = fetchPosts();

  // const friendsPromise = fetchFriends();

  const commentsPromise = fetchComments();

  
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

      {/* <Suspense fallback={<h4>Posts are coming ...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      
      
      <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat ...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Suspense fallback={<h3>Comments Loading ...</h3>}>
        <Comments commentsPromise={commentsPromise} ></Comments>
      </Suspense>

      <Bowler></Bowler>

      <Batsman></Batsman>


      <Counter></Counter>

      <ShowHideText></ShowHideText>

      <DarkModeToggle></DarkModeToggle>

      <ToDoList></ToDoList>

      <CharacterCounter></CharacterCounter>

      <ShowHidePassword></ShowHidePassword>

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
