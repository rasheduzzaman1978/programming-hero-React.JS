import { useState } from "react";

function App() {
  // Show / Hide Text App
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  // Counter App
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  // Dark Mode Toggle
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  const darkModeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "30px",
    margin: "20px",
    borderRadius: "16px",
    textAlign: "center",
    fontFamily: "Arial"
  };

  return (
    <>
      {/* Show / Hide Text App */}
      <div style={styles.container}>
        <h1>Show / Hide Text App</h1>

        <button onClick={toggleText} style={styles.button}>
          {isVisible ? "Hide Text" : "Show Text"}
        </button>

        {isVisible && (
          <p style={styles.text}>
            Hello, React Learner! 🚀
          </p>
        )}
      </div>

      {/* Counter App */}
      <div style={styles.counterContainer}>
        <h1>Counter App</h1>
        <h2>Counter: {count}</h2>

        <button onClick={handleIncrease} style={styles.button}>
          +
        </button>

        <button onClick={handleDecrease} style={styles.button}>
          -
        </button>

        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <div style={darkModeStyle}>
        <h1>Dark Mode Toggle</h1>

        <button onClick={toggleDarkMode} style={styles.button}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        <p style={styles.text}>
          Current Mode: {dark ? "Dark" : "Light"}
        </p>
      </div>

      
    </>
  );
}

const styles = {
  container: {
    backgroundColor: "lightgray",
    padding: "20px",
    margin: "20px",
    borderRadius: "16px",
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  counterContainer: {
    backgroundColor: "lightyellow",
    padding: "20px",
    margin: "20px",
    borderRadius: "16px",
    textAlign: "center",
    fontFamily: "Arial"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "10px",
    backgroundColor: "lightblue",
    borderRadius: "10px",
    border: "none"
  },
  text: {
    marginTop: "20px",
    fontSize: "20px"
  }
};

export default App;