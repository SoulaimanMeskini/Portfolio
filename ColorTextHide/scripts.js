// Text Switch //

/*
document.querySelector("button1").addEventListener
("click",function changeText(){
    document.getElementById("textChanger").innerHTML=("Hey ;P");
})
*/

var text = ["Hallo", "Hola", "Hello", "Salaam", "Ohayo", "Konnichiwa", "Bonjour", "Kia Ora", ".... . .-.. .-.. ---",];
var t = 0;
document.querySelector("button1").addEventListener
("click",function changeText(){
    t = t < text.length-1 ? ++t: 0;
    document.getElementById("textChanger").innerHTML = text[t];
})

// Background color switch // 

var color = ["#222f3e", "#892b54", "#4212e8", "#4ee510", "#e7d217", "#ee3799", "#d20447", "#7ffA63", "#4a7363", "#6ffa19", "#d47636", "#f8f53f", "#8e2a3e"];
var c = 0;
document.querySelector("button2").addEventListener
("click",function colorSwitch(){
    c = c < color.length-1 ? ++c: 0;
    document.querySelector("body").style.background = color[c]
})


// Button Hide //
var a;

document.querySelector("button3").addEventListener
("click",function HideButtons(){
        if(a==1)
        {
            document.getElementById("button1",).style.display="inline";
            document.getElementById("button2",).style.display="inline";
            return a=0;
        }

        else{
            document.getElementById("button1", "button2").style.display="none"
            document.getElementById("button2").style.display="none"
            return a=1;
        }
    
})