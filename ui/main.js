var button = document.getElementById("counter");
var counter = 0;
button.onclick  = function() {
    var counter = document.getElementById("click_button");
    counter= counter+1;
    var span = document.getElementById("count");
   span.innerHTML = counter.toString();
}