var socket = io();
var signDiv = document.getElementById('signDiv')
var signDivUsername = document.getElementById('signDiv-username')
var signDivPlay = document.getElementById('signDiv-play')
var usernameForm = document.getElementById('username-form')
var canvas = document.getElementById('cvs')
var ctx = canvas.getContext('2d')
 var width1 = canvas.width;
 var height1= canvas.height;


var scale = 1;
 /*var evadesButton = document.getElementById('evades')
var diepButton = document.getElementById('diep')
var myEvadesButton = document.getElementById('myEvades')
var ravelButton = document.getElementById('ravel')*/
socket.on('playResponse',function(data){
  if(data.good == true){
    signDiv.style.display = 'none'
    gameDiv.style.display = 'inline-block'
      socket.emit('sendMsgToServer', "I just Connected")
  }else{
    alert('This Username is not Valid')
  }
})
socket.on('addToChat',function(data){
  chatText.innerHTML += '<div>' + data + '</div>';
  chatText.scrollTop = chatText.scrollHeight;
})
  window.onresize = function() {
    var winw =window.innerWidth;
    var winh = window.innerHeight;
    var xvalue = winw / width1;
    var yvalue = winh / height1;
    scale = xvalue;
    if (yvalue < xvalue) {
      scale = yvalue
    }
    canvas.style.transform = "scale(" + scale + ")";
    canvas.style.left = (winw - width1) / 2 + "px";
    canvas.style.top = (winh - height1) / 2 + "px";
  };
  window.onload = function() {
    var winw =window.innerWidth;
    var winh = window.innerHeight;
    var xvalue = winw / width1;
    var yvalue = winh / height1;
    scale = xvalue;
    if (yvalue < xvalue) {
      scale = yvalue
    }
    canvas.style.transform = "scale(" + scale + ")";
    canvas.style.left = (winw - width1) / 2 + "px";
    canvas.style.top = (winh - height1) / 2 + "px";
  }
document.onkeyup = function(e){
  if(e.keyCode ===68 || e.keyCode === 39){
    socket.emit('keyPress',{inputId:'right',state:false})
  }else if(e.keyCode === 83 || e.keyCode === 40){
    socket.emit('keyPress',{inputId:'down',state:false})
  }else if(e.keyCode === 65 || e.keyCode ===37){
    socket.emit('keyPress',{inputId:'left',state:false})
  }else if(e.keyCode ===87 || e.keyCode === 38){
    socket.emit('keyPress',{inputId:'up',state:false})
  }else if(e.keyCode === 32){
    socket.emit('keyPress',{inputId:'super',state:false})
  }
}
document.onmousedown = function(e){
  socket.emit('keyPress',{inputId:'attack',state:true});
}
document.onmouseup = function(e){
  socket.emit('keyPress',{inputId:'attack',state:false});
}
document.onmousemove =function(e){
  var x = -width1/2+ e.clientX -8;
  var y = -height1/2 + e.clientY-8;
  var angle = Math.atan2(y,x) / Math.PI * 180;
  socket.emit('keyPress',{inputId:'mouseAngle',state:angle})
}
document.oncontextmenu = function(event){
  event.preventDefault()
}
