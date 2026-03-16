import { useState } from "react";

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(false);

  // const toggleText = () => {
  //   setIsVisible(!isVisible);
  // };
  // or 
  const toggleText = () => {
    setIsVisible((prev) => !prev);
  };

  return (
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
  );
}

const styles = {
  container: {
    backgroundColor: "lightgray",
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
    marginTop: "10px",
    backgroundColor: "lightblue",
    borderRadius: "10px",
    border: "none"
  },
  text: {
    marginTop: "20px",
    fontSize: "20px",
    color: "black"
  }
};

export default ShowHideText;


