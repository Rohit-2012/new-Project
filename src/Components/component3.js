import { useState } from "react";

export function Comp3(){
    const [change, setChange] = useState("Amit")

    function handleChange(){
        setChange(change === "Amit" ? "Rajan" : "Amit")
    }

    return (
        <div>
            <h1>My name is {change}</h1>
            <button onClick={handleChange}>Change Name</button>
        </div>
    )
}