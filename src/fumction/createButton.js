
function createButton (nametag, clas, onclick, where)
{
    var para = document.createElement("button");
    para.innerHTML=nametag
    para.className=clas
    para.onclick=onclick;
    var element = document.getElementById(where);
    element.appendChild(para);
}
/*
nametag = name to show inside the button
clas = button css classname
onclick = function to execute when button clicked
where = id of <div><div/> to put the button in
*/

export default createButton;