import "./style.css";
import { useState } from "react";

export default function MyChange() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
function MyButton(count, onClick) {
  return <button onclick={onClick}>Clicked {count} times</button>;
}
