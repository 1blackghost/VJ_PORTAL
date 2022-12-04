
function users(){
    document.getElementById("users").style.visibility="visible";
}
function exit(){
    document.getElementById("users").style.visibility="hidden";
}
function archive(){
    document.getElementById("archive").style.visibility="visible";
}
function exit1(){
    document.getElementById("archive").style.visibility="hidden";
}
function myself(){
    document.getElementById("myself").style.visibility="visible";
}
function exit2(){
    document.getElementById("myself").style.visibility="hidden";
}
function ham(){
    if(document.getElementById("header").style.display==="none"){
    document.getElementById("header").style.display="inherit";
}
else{
    document.getElementById("header").style.display="none";
}
}
function Box(){
    document.getElementById("updir").style.display="inherit";
    document.getElementById("blrdir").style.filter="blur(5px)";
}
function Boxcls(){
    document.getElementById("updir").style.display="none";
    document.getElementById("blrdir").style.filter="none";
}
function Box2(){
    document.getElementById("updir2").style.display="inherit";
    document.getElementById("blrdir").style.filter="blur(5px)";
}
function Boxcls2(){
    document.getElementById("updir2").style.display="none";
    document.getElementById("blrdir").style.filter="none";
}