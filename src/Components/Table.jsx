import { useState } from "react";


export function Table() {
  let random = Math.floor((Math.random()*99)+1)
const [num, setNum] = useState(0)
const multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function handleClick(){
  setNum(random)
}
  return (
    <div className="App">
      <button onClick={handleClick}>Generate Number</button>
     <h1>Random Number: {num}</h1>
     <h2>Table</h2>
     <div>
     <table>
                {multiplier.map((ele)=>{
          return(
            <tr>
              <td>{num}</td>
              <td>X</td>
              <td>{ele}</td>
              <td>=</td>
            <td>{ele*num}</td>
            </tr>
          )
        })}
      
     </table>
     </div>
    </div>
  );
}

