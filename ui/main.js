var element = document.getElementById("counter");
var counter = 0;
element.onclicklistener  = function() {
    var counter_display = document.getElementById("click_button");
    counter= counter+1;
    var element = document.getElementById("count");
    element.innerHTML = counter.toString();
}