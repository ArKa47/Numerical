
function cramer_show (n, where)
{
    var element = document.getElementById(where);
    let i = 0;
    let str = "";
    let equal = "";
    var xz = document.createElement("p");
    xz.className="float-customise";
    for(i ; i<n; i++){
        var para = document.createElement("p");
        para.innerHTML += "| ";
        for(let j=0 ; j<n ; j++){
            str = "matrix"+i+j;
            para.innerHTML += document.getElementById(str).value+" | "
        }
        para.innerHTML += "&emsp;[X"+(i+1)+"]&emsp;=&emsp;";
        equal = "equal"+i;
        para.innerHTML += document.getElementById(equal).value;;
        element.appendChild(para)
    }
    //var br = document.createElement("br");
    //element.appendChild(br);
}

export default cramer_show;