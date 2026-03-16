import { useState } from "react"

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const [zeros, setZeros] = useState(0);
  const [singles, setSingles] = useState(0);
  const [twos, setTwos] = useState(0);
  const [threes, setThrees] = useState(0);
  const [fours, setFours] = useState(0);

  const [sixes, setSixes] = useState(0);
  const handleZero = () => {
    // const updatedRuns = runs + 1;
    // setRuns(updatedRuns);
    setZeros(zeros + 1);
  }
  
  const handleSingle = () => {
    // const updatedRuns = runs + 1;
    // setRuns(updatedRuns);
    setRuns(runs + 1);
    setSingles(singles + 1);
  }
  const handleTwo = () => {
    // const updatedRuns = runs + 2;
    // setRuns(updatedRuns);
    setRuns(runs + 2);
    setTwos(twos + 1);
  }
  const handleThree = () => {
    // const updatedRuns = runs + 3;
    // setRuns(updatedRuns);
    setRuns(runs + 3);
    setThrees(threes + 1);
  }
  
  const handleFour = () => {
    // const updatedruns = runs + 4;
    // setRuns(updatedruns);
    setRuns(runs + 4);
    setFours(fours + 1);

  }

  const handleSix = () => {
    // const updatedruns = runs + 6;
    // setRuns(updatedruns);
    setRuns(runs + 6);
    setSixes(sixes + 1);
  }

  const container = {
  border: "2px solid #af6161",
  padding: "25px",
  margin: "20px",
  borderRadius: "12px",
  textAlign: "center",
  background: "#f9fafb",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
};

const title = {
  color: "#2563eb",
  marginBottom: "5px"
};

const player = {
  color: "#444"
};

const stats = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "10px",
  margin: "20px 0"
};

const score = {
  fontSize: "32px",
  color: "#16a34a"
};

const btnGroup = {
  marginTop: "15px"
};

const btn = {
  padding: "10px 16px",
  margin: "6px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#570df8",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s"
};

const fifty = {
  color: "#f59e0b",
  fontWeight: "bold"
};

const hundred = {
  color: "#dc2626",
  fontWeight: "bold",
  fontSize: "18px"
};

  return (
    <div style={container}>
  <h2 style={title}>🏏 Bangladeshi Batsman</h2>
  <h3 style={player}>Player Name: Tamim Iqbal</h3>

  <div style={stats}>
    <p><small>Zero: {zeros}</small></p>
    <p><small>Single: {singles}</small></p>
    <p><small>Two: {twos}</small></p>
    <p><small>Three: {threes}</small></p>
    <p><small>Four: {fours}</small></p>
    <p><small>Six: {sixes}</small></p>
  </div>

  {
    runs >= 50 && runs < 100 &&
    <p style={fifty}>🎉 Congratulations! Your score: 50+</p>
  }

  {
    runs >= 100 &&
    <p style={hundred}>🔥 Weldone! Your score: 100+</p>
  }

  <h1 style={score}>Score: {runs}</h1>

  <div style={btnGroup}>
    <button style={btn} onClick={handleZero}>0</button>
    <button style={btn} onClick={handleSingle}>1</button>
    <button style={btn} onClick={handleTwo}>2</button>
    <button style={btn} onClick={handleThree}>3</button>
    <button style={btn} onClick={handleFour}>4</button>
    <button style={btn} onClick={handleSix}>6</button>
  </div>
</div>
  )
}