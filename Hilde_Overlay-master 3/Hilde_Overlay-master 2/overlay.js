console.log('init');

document.onkeydown = checkKey;
document.onkeyup = fade_out;

var div = document.createElement("div");
div.id = "showdiv";
//css styling
div.style.width = "100vw";
div.style.height = "100vh";
// div.style.background = "blue";
div.style.position = "fixed";
div.style.zIndex = "999";
div.style.margin = "0";
div.style.top = "0";
div.style.left = "0";
//hier de inhoud van de div
 div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask-2.png' style='height: 100%; width: 100%;'>";
 div.style.display = "none";



//hoi x 1000
// for(var i = 0; i < 1000; i++){
//      div.innerHTML += "hoi";
// }

document.body.appendChild(div);


function checkKey(e) {

    e = e || window.event;

    switch (e.keyCode)
    {
       
       case 8:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("backspace")
       break;

       case 9:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("tab")
       break;

       case 13:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("enter")
       break;

       case 16:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("shift")
       break;

       case 17:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("ctrl")
       break;

       case 18:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("alt")
       break;

       case 19:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("pause/break")
       break;

       case 20:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("caps lock")
       break;

       case 27:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("escape")
       break;

       case 33:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("page up")
       break;

       case 34:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("page down")
       break;

       case 35:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("end")
       break;

       case 36:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("home")
       break;

       case 37:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("left arrow")
       break;

       case 38:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("up arrow")
       break;

       case 39:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("right arrow")
       break;


       case 40:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("down arrow")
       break;


       case 45:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("insert")
       break;


       case 46:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("delete")
       break;


       case 48:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("0")
       break;


       case 49:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("1")
       break;


       case 50:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("2")
       break;


       case 51:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("3")
       break;


       case 52:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("4")
       break;


       case 53:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("5")
       break;


       case 54:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("6")
       break;


       case 55:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("7")
       break;


       case 56:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("8")
       break;


       case 57:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("9")
       break;


       case 65:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("a")
       break;

       case 66:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("b")
       break;

       case 67:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("c")
       break;

       case 68:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("d")
       break;

       case 69:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("e")
       break;

       case 70:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f")
       break;

       case 71:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("g")
       break;

       case 72:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("h")
       break;

       case 73:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("i")
       break;

       case 74:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("j")
       break;

       case 75:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("k")
       break;

       case 76:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("l")
       break;

       case 77:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("m")
       break;

       case 78:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("n")
       break;

       case 79:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("o")
       break;

       case 80:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("p")
       break;

       case 81:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("q")
       break;

       case 82:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("r")
       break;

       case 83:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("s")
       break;

       case 84:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("t")
       break;

       case 85:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("u")
       break;

       case 86:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("v")
       break;

       case 87:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("w")
       break;

       case 88:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("x")
       break;

       case 89:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("y")
       break;

       case 90:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("z")
       break;

       case 91:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("left window key")
       break;

       case 92:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("right window key")
       break;

       case 93:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("select key")
       break;

       case 96:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 0")
       break;

       case 97:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 1")
       break;

       case 98:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 2")
       break;

       case 99:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 3")
       break;

       case 100:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 4")
       break;

       case 101:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 5")
       break;

       case 102:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 6")
       break;

       case 103:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 7")
       break;

       case 104:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 8")
       break;

       case 105:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("numpad 9")
       break;

       case 106:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("multiply")
       break;

       case 107:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("add")
       break;

       case 109:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("subtract")
       break;

       case 110:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("decimal point")
       break;

       case 111:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("divide")
       break;

       case 112:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f1")
       break;

       case 113:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f2")
       break;

       case 114:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f3")
       break;

       case 115:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f4")
       break;

       case 116:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f5")
       break;

       case 117:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f6")
       break;

       case 118:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f7")
       break;

       case 119:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f8")
       break;

       case 120:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f9")
       break;

       case 121:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f10")
       break;

       case 122:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f11")
       break;

       case 144:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("num lock")
       break;

       case 145:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("f4")
       break;

       case 186:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("semi-colon")
       break;

       case 187:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("equal sign")
       break;

       case 188:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("comma")
       break;

       case 189:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("dash")
       break;

       case 190:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("period")
       break;

       case 191:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("forward slash")
       break;

       case 192:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("grave accent")
       break;

       case 219:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("open bracket")
       break;

       case 220:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("back slash")
       break;

       case 221:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("close bracket")
       break;

       case 222:
       div.innerHTML = "<img src='https://frvisser.github.io/Hilde_Overlay/img/mask.png' style='height: 100%; width: 100%;'>";
       $('#showdiv').fadeIn(80)
       console.log("single quote")
       break;







       default:
       console.log("other key")
       break;




    }

}

function fade_out(e) {

    $('#showdiv').fadeOut(80);
  }
