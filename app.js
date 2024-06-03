var btnSingin = document.querySelector("#a1");
var btnSingup = document.querySelector("#b2");

var body = document.querySelector("body");

btnSingin.addEventListener ("click", function(){
    body.className = "sing-in-js"
});
btnSingup.addEventListener ("click", function(){
    body.className = "sing-up-js"
});