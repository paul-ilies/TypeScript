var button = document.querySelector("button");
var input1 = document.getElementById("num1") /* insert typescript tag*/;
var input2 = document.getElementById("num2") /* insert typescript tag*/;
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
