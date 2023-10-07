function changeBackgroundColorToWhite() {
    document.body.style.backgroundColor = "#FAF9F6";
    let elements = document.getElementsByClassName("overviewStyle");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.color = "black";
    }
    document.getElementById("colorListHeading").style.color = "#000000";
}

function changeBackgroundColorToBlack() {
    document.body.style.backgroundColor = "#000000";
    let elements = document.getElementsByClassName("overviewStyle");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.color = "white";
    }
    document.getElementById("colorListHeading").style.color = "#ffffff";

}