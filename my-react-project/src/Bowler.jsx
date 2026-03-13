import { useState } from "react";

export default function Bowling() {

  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);

  const addRun = () => {
    // setRuns(runs + 1);
    // or 
    setRuns(prev => prev + 1);
  };

  const addWicket = () => {
    if (wickets < 10) {
    // setWickets(wickets + 1);
    // or 
    setWickets(prev => prev + 1);
    }
  };

  const addOver = () => {
    // setOvers(overs + 1);
    // or 
    setOvers(prev => prev + 1);
  };

  const cardStyle = {
    border: "2px solid skyblue",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    textAlign: "center"
  };

  const btn = {
    padding: "8px 16px",
    margin: "8px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#570df8",
    color: "white"
  };

  return (
    <div style={cardStyle}>
      <h2>Bowling Score</h2>

      <p>Runs Given: {runs}</p>
      <p>Wickets: {wickets}</p>
      <p>Overs: {overs}</p>

      <button style={btn} onClick={addRun}>Give Run</button>
      <button style={btn} onClick={addWicket}>Take Wicket</button>
      <button style={btn} onClick={addOver}>Complete Over</button>
    </div>
  );
}