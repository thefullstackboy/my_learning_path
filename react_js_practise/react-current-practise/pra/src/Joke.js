import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show Punchline</button>
            <hr />
        </div>
    )
}

const cond1 = false
const cond2 = false
if(cond1 && console.log("Hello there")) {
    // this code will NOT run
}

//https://scrimba.com/learn/learnreact/conditional-rendering-practice-co7a3413c9530c3e2804c4916
//0:56