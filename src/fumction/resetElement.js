import React from 'react';
//use
const resetelement = (id) =>
{
    try{
        var myobj = document.getElementById(id);
        myobj.textContent='';
    }catch(e){
        console.log(e);
    }

}

export default resetelement;