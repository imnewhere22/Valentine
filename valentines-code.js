let paddingValue = 0;
let paddingNoDiddy = 30;

function haha() {
    paddingValue += 100;
    paddingNoDiddy -= 10;
    document.getElementById("kurkaNo").style.padding = paddingNoDiddy + "px";
    document.getElementById("kurkaYes").style.padding = paddingValue + "px";
    if (paddingNoDiddy <= 0) {
        document.getElementById("kurkaNo").remove();
    }
}