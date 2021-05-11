

function cramer_sup (n, where)
{
    var element = document.getElementById(where);
    let i = 0;
    let str = "";
    for(i ; i<n; i++){
        for(let j=0 ; j<n ; j++){
            str = "matrix"+i+j;
            var para = document.createElement("input");
            para.id = str;
            para.className = "my-input"
            para.placeholder = "["+i+"]["+j+"]"
            element.appendChild(para);
            if(j==parseInt(n-1))
            {
                var para = document.createElement("input");
                para.id = "equal"+i;
                para.className = "my-input-equal"
                para.placeholder = "equal "+"["+i+"]";
                element.appendChild(para);
            }
        }
        var br = document.createElement("br");
        var element = document.getElementById(where);
        element.appendChild(br);
    }
}

export default cramer_sup;