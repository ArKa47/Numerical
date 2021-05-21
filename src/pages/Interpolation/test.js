import React from 'react';

let mathjs = require('mathjs')

function test() {
    const pop = () =>
    {
        let pp = document.getElementById("pop").value;
        let pog = mathjs.simplify(pp);
        document.getElementById("test").innerHTML=pog;
    }
    return(
        <div className="App">
            <div className="container">
                <h1 className="title is-1" id="test">TEST</h1>
                <input className="input is-primary" id="pop" placeholder="test" ></input>
                <button className="button is-info" onClick={pop}>pop?</button>
            </div>
        </div>
    )
}

export default test;