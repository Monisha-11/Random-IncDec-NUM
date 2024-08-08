import { useState } from "react"

function Counter()
{
    var [count,setCount] = useState(0)

    function incfun()
    {

        var inc = count+1
        setCount(inc)

    }

    function decfun()
    {
        var dec = count-1
        setCount(dec)

    }

    return(
        <div className="inc">
            <h1>COUNTER</h1>
            <h1 id="count">{count}</h1>
            <button onClick={incfun}>Increment</button>
            <button onClick={decfun}>Decrement</button>
        </div>
    )
}

export default Counter