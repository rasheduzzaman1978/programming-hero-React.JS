import { useState } from "react";

function App() {
  const [task, setTask] = useState(""); // input box-এর বর্তমান লেখা
  const [todos, setTodos] = useState([]); // সব todo task-এর list

  const addTask = () => {
  if (task.trim() === "") return;
  setTodos([...todos, task]); // পুরোনো list + নতুন task
  setTask(""); // input আবার খালি
};
  
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // যেটা delete করব সেটা বাদ
    setTodos(newTodos); // নতুন list save
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>

      <input
        value={task} // input-এর value task state থেকে আসছে
        onChange={(e) => setTask(e.target.value)} // user যা লিখছে, task-এ save হচ্ছে
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;