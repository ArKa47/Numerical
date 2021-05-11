import math from "mathjs";
import react from "react"

function prepare (n, str)
{
    let matrix = [];
    for(let i = 0; i<n; i++)
    {
        matrix[i] = [];
        let x = parseFloat(document.getElementById(str+i+"0").value);
        let y = parseFloat(document.getElementById(str+i+"1").value);
        matrix[i][0]=x;
        matrix[i][1]=y;
    }
    return matrix;
}

export default prepare;