import { useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
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
    <div style={darkModeStyle}>
      <h1>Dark Mode Toggle</h1>

      <button onClick={toggleDarkMode} style={styles.button}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <p style={styles.text}>
        Current Mode: {dark ? "Dark" : "Light"}
      </p>
    </div>
  );
}

const styles = {
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

export default DarkModeToggle;