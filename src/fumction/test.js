var myTimer;
   function clock() {
    myTimer = setInterval(myClock, 1000);
     var c = 5;
     function name(p) {
        var element = document.getElementById("jack1").innerHTML="??"
     }
     function myClock() {
        var para = document.createElement("p");
        var node = document.createTextNode("pop");
        para.appendChild(node);
    
        var element = document.getElementById("jack");
        element.appendChild(para);
       --c
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
     name()
   }

export default clock;