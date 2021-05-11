import { typeOf } from 'mathjs';
import React from 'react';
//use
const addelement = (str, where, id) =>
{
    var para = document.createElement("input");
    para.className="my-input";
    para.id=id;
    para.value=str;
    var element = document.getElementById(where);
    element.appendChild(para);
}

export default addelement;
