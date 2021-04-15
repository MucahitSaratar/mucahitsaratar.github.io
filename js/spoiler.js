function showme() {
    var body = document.body;
    body.classList.add("lanetclass");
    document.getElementById("spoileronleyici").style.display = "none";
    document.getElementById("spoiler").style.display = "inline";
}

function degistir(rengim) {
    document.body.style.backgroundColor = rengim
}

//window.onmousedown = function(olay) {
//    var body = document.body;
//    body.classList.add("lanetclass"); }