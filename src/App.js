import "./styles.css";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Click {count} times</button>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Counters that count Separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
