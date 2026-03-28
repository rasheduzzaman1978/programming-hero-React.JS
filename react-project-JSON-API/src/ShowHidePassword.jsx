import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Toggle</h2>

      <input
  type={show ? "text" : "password"}
  placeholder="Enter password"
/>

<button onClick={() => setShow(!show)}>
  {show ? "Hide" : "Show"}
</button>
    </div>
  );
}

export default App;