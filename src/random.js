import { useState } from "react"

function Random()
{

    var [random,setRandom] = useState(0)

    function rand()
    {

        var num = Math.floor(Math.random()*10+1)
        setRandom(num)

    }

    return(
        <div className="inc">
            <h1>Random Number Generator</h1>
            <h1 id="ran">{random}</h1>
            <button onClick={rand}>Random NUmber</button>
        </div>
    )
}

export default Random