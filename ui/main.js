var button=document.getElementById('counter');
var counter=0;
button.onclick = function() {
    counter=counter+1;
    alert("this is absolute crap");
    var shit=document.getElementById("count");
    shit.innerHTML=counter.toString();
    };
