import { useState } from "react";

export function Comp1() {
  const [userInput, setInput] = useState("");
  const [list, setList] = useState([]);

  function addTask(elem) {
    setInput(elem.target.value);
  }

  function listTask() {
    setList([...list, { id: list.length + 1, string: userInput }]);
    setInput("");
  }

  return (
    <div style={{ margin: 50 }}>
      <input onChange={addTask} style={{ margin: 10 }} />
      <button onClick={listTask}>Add</button>
      <ul>
        {list.map((m) => (
          <li style={{ listStyleType: "none" }} key={m.id}>
            {m.string}
          </li>
        ))}
      </ul>
    </div>
  );
}
