import { typeOf } from 'mathjs';
import React from 'react';
//use
const addelement = (str, where) =>
{
    if(typeof(str) == "string" || typeof(str) == "number"){
            var para = document.createElement("p");
            var node = document.createTextNode(str);
            para.appendChild(node);

            var element = document.getElementById(where);
            element.appendChild(para);
    }
    else
    {
            var element = document.getElementById(where);
            element.appendChild(str);
    }
}

export default addelement;
