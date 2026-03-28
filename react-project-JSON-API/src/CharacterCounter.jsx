import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Character Counter</h2>

      <textarea
        rows="4"
        cols="30"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default App;