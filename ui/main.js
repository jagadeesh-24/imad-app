var button=document.getElementById('counter');
var counter=0;
button.onclick = function() {
    counter=counter+1;
    alert("this is absolute crap");
    var shit=document.getElementById("count");
    shit.innerHTML=counter.toString();
    };

var tester_button = document.getElementById("click_button");
tester_button.onclick = temp;

var counter_value = 0;

function temp () {
    alert("on click function being fucked");
    counter_value = counter_value + 1;
    var display = document.getElementById("display_value");
    display.innerHTML = String(counter_value);
}