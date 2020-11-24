
window.addEventListener("keydown",my_Keydown)

function my_Keydown(e){
    Key=e.keyCode;
    console.log(Key);
    var Code=[];
    Code.push(Key);
    Code.join(",")
    console.log(Code);
    document.getElementById("Ascii").innerHTML=Key;


}