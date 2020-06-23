
//var p = new Image()
//p.src ='https://www.stickpng.com/assets/images/58afdad6829958a978a4a693.png'
var b = new Image()
b.src = '/client/images/energy-ball.png'
//var map = new Image()
//map.src = 'https://i.pinimg.com/originals/05/3d/0e/053d0e0e6a047192ab76c94f47355cdd.jpg'
//var map2 = new Image()
//map2.src = "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"*/
  //var gunSmg= document.getElementById('SMG')
  //  var gunAr = document.getElementById('AR')
    //  var gunBox= document.getElementById('chooseGun')
    //  var gunSr = document.getElementById('SR')
  var canvas = document.getElementById('cvs')
  var ctx = canvas.getContext('2d'),
 width1 = canvas.width,
  height1 = canvas.height;
var scale = 1;
  var map1 = {
    width:2000-(250),
    height:1000,
  }
//  var scale = 1;
  //var width = canvas.width;
//  var height = canvas.height;
/*  window.onresize = function() {
    var winw = document.documentElement.clientWidth;
    var winh = document.documentElement.clientHeight;
    var xvalue = winw / width;
    var yvalue = winh / height;
    scale = xvalue;
    if (yvalue < xvalue) {
      scale = yvalue
    }
    canvas.style.transform = "scale(" + scale + ")";
    canvas.style.left = (winw - width) / 2 + "px";
    canvas.style.top = (winh - height) / 2 + "px";
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
  };
  window.onload = function() {
    var winw =document.documentElement.clientWidth;
    var winh = document.documentElement.clientHeight;
    var xvalue = winw / width;
    var yvalue = winh / height;
    scale = xvalue;
    if (yvalue < xvalue) {
      scale = yvalue
    }
    canvas.style.transform = "scale(" + scale + ")";
    canvas.style.left = (winw - width) / 2 + "px";
    canvas.style.top = (winh - height) / 2 + "px";
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
  }*/
//  const times = [];
  // let fps;
/*  evadesButton.onclick = function(){
  window.open('https://evades.io/')
  }
  diepButton.onclick = function(){
    window.open('https://diep.io/')
  }
  myEvadesButton.onclick = function(){
    window.open('https://evades-testing.000webhostapp.com/')
  }
  ravelButton.onclick = function(){
    window.open('https://evades.ravelfett.com/')
    window.open('https://test.ravelfett.com/dodge.html')
  }*/
           function Player(initPack){
             var self ={}
             self.id = initPack.id;
             self.number = initPack.number;
             self.x = initPack.x;
             self.y = initPack.y;
             self.hp = initPack.hp;
             self.hpMax = initPack.hpMax;
             self.score = initPack.score
             self.gun = 'PISTOL'
             //self.gun = initPack.gun;
             self.username = initPack.username;
             self.alpha = 1;
             self.superOn = initPack.superOn;
             self.chatMode = false;
             self.isDead = initPack.dead;
            /* self.ammo = {
                 AR:30,
                 SMG:24,
                 SR:3,
               }*/
  //   self.fps = {startTime:0,frameNumber:0,getFPS:function(){this.frameNumber++;var d = new Date().getTime(),currentTime = ( d - this.startTime ) / 1000,	result = Math.floor( ( this.frameNumber / currentTime ) );		if( currentTime > 1 ){			this.startTime = new Date().getTime();			this.frameNumber = 0;		}		return result;	}	};
            self.imDead = function(){
              var hpWidth = self.hp /2.3;
              ctx.fillStyle = 'rgb(0,0,205)'
              var x = self.x - Player.list[selfId].x + width1/2;
              var y = self.y - Player.list[selfId].y + height1/2;
              ctx.globalAlpha = 0.7
                   ctx.fillStyle ="black"
                      ctx.fillRect(x-100/2.4 +20.9, y-14,100/2.4,10)
                      ctx.globalAlpha = self.alpha;
                      ctx.beginPath()
                      ctx.fillStyle = 'red'
                        ctx.globalAlpha = 1;
                     ctx.arc(x,y,20,0,Math.PI*2)
                     ctx.fill()
                     ctx.closePath()
                     ctx.
                 //   ctx.fillText(self.score,self.x,self.y-60)
                 ctx.globalAlpha = 1;
                 ctx.fillStyle ='black'
                 ctx.font = '10px Cursive'
            }
            self.notDead = function(){
              var hpWidth = self.hp /2.3;
              ctx.fillStyle = 'rgb(0,205,0)'
              var x = self.x - Player.list[selfId].x + width1/2;
              var y = self.y - Player.list[selfId].y + height1/2;
              ctx.globalAlpha = 0.7
              ctx.fillRect(x - 100/2.3+ 22,y - 32,hpWidth,10)
              ctx.strokeRect(x-100/2.3 + 22,y-32,100/2.3,10)
             ctx.fillStyle = "rgba(250,0,0,0.4)"
            ctx.fillRect(x-100/2.3 + 22,y-32,100/2.3,10)
            ctx.globalAlpha = self.alpha;
            ctx.beginPath()
            ctx.fillStyle = 'red'
              ctx.globalAlpha = 1;
           ctx.arc(x,y,18,0,Math.PI*2)
           ctx.fill()
           ctx.closePath
           ctx.font = '13px Arial'
           ctx.fillStyle = 'black';
           ctx.fillText("User["+self.score+"]",x-20,y-35)
       //   ctx.fillText(self.score,self.x,self.y-60)
       ctx.globalAlpha = 1;
       ctx.fillStyle ='black'
       ctx.font = '10px Cursive'
            }
             self.draw = function(){
              /* if(self.score <= 2){
                   socket.emit('swap',{gun:self.gun})
                   self.gun = 'AR';
               }else if(self.score >= 3 && self.score <=5){
                 self.gun = 'AR';
                 socket.emit('swap',{gun:self.gun})
               }else if(self.score >= 6){
                 for(var i in Player.list){
                   var p = Player.list[i]
                   p.gun = 'SMG';
                   socket.emit('swap',{gun:p.gun})
                 }
               }*/
              if(self.dead){
                self.imDead()
              }else if(!self.dead){
                self.notDead()
              }
             }

             Player.list[self.id] = self;
             return self;
           }
    Player.list = {};
  /*  gunBox.onclick = function(){
      gunBox.style.display = 'none'
      gunAr.style.display ='inline-block'
      gunSmg.style.display= 'inline-block'
      gunSr.style.display = 'inline-block'
    }
     gunAr.onclick = function(){
      gunAr.style.display ='none'
      gunSmg.style.display='none'
      gunSr.style.display = 'none'
      gunBox.style.display ='inline-block'
      for(var i in Player.list){
        var p = Player.list[i]
        p.gun = 'AR';
        socket.emit('swap',{gun:p.gun})
      }
    }
    gunSmg.onclick = function(){
      gunAr.style.display ='none'
      gunSmg.style.display='none'
      gunSr.style.display = 'none'
      gunBox.style.display ='inline-block'
      for(var i in Player.list){
        var p = Player.list[i]
        p.gun = 'SMG';
        socket.emit('swap',{gun:p.gun})
      }
    }
    gunSr.onclick = function(){
      gunAr.style.display ='none'
      gunSmg.style.display='none'
      gunSr.style.display = 'none'
      gunBox.style.display ='inline-block'
      for(var i in Player.list){
        var p = Player.list[i]
        p.gun = 'SR';
        socket.emit('swap',{gun:p.gun})
      }
    }*/
    var Bullet = function(initPack){
      var self ={}
      self.id = initPack.id;
      self.x = initPack.x;
      self.y = initPack.y;
      self.playerGun = 'PISTOL'
      self.globalAlpha = 1;
  //    for(var i in Player.list){
    //    var p = Player.list[i]
    //    self.playerGun = p.gun;
  /*      if(!p.superAttack){
        if(p.gun =='AR'){
          p.ammo.AR-=1;
        }else if(p.gun =='SMG'){
          p.ammo.SMG-=1;
        }else if(p.gun =='SR'){
          p.ammo.SR-=1;
        }
      }*/

      self.draw = function(){
        var width = 28
        var height = 28
        var r =14

      var  x = self.x - Player.list[selfId].x + width1/2;
        var y = self.y - Player.list[selfId].y + height1/2;
          ctx.globalAlpha = self.globalAlpha
    ctx.drawImage(b,0,0,b.width,b.height,x-width/2,y-height/2,width,height)
  ////\      ctx.fillStyle='yellow'
//     ctx.beginPath()
//    ctx.arc(x-width/2,y-height/2,r,0,Math.PI*2)
//   ctx.fill()
//   ctx.closePath()

      }
    Bullet.list[self.id] = self;
      return self;
    }
    Bullet.list ={}
/*    var Enemy = function(initPack){
      var self ={}
      self.id = initPack.id;
      self.x = initPack.x;
      self.y = initPack.y;
      self.r = initPack.r;
      self.globalAlpha = 1;
      self.draw  = function(){
        ctx.globalAlpha = self.globalAlpha
        ctx.beginPath()
        ctx.fillStyle = 'rgb(125, 125, 125)'
        ctx.arc(self.x- Player.list[selfId].x + width1/2,self.y -Player.list[selfId].y + height1/2,self.r,0,Math.PI*2)
          ctx.fill()
        ctx.stroke()
        ctx.lineWidth = 2;
        ctx.closePath()
      }
      Enemy.list[self.id] = self;
      return self;
    }
    Enemy.list = {}*/
    var selfId = null;
        socket.on('init',function(data){
          if(data.selfId){
            selfId = data.selfId;
          }
          for (var i = 0; i < data.player.length; i++) {
          new Player(data.player[i]);
          }
          for (var i = 0; i < data.bullet.length; i++) {
             new Bullet(data.bullet[i]);
          }

          /*for(var i = 0; i < data.enemy.length; i++){
            new Enemy(data.enemy[i])
          }*/
        })
        socket.on('update',function(data){
          for (var i = 0; i < data.player.length; i++) {
          var pack = data.player[i];
          var p = Player.list[pack.id];
          if(p){
            if(pack.x !== undefined){
              p.x = pack.x;
            }
            if(pack.y !== undefined){
              p.y = pack.y;
            }
            if(pack.hp !== undefined){
              p.hp = pack.hp;
            }
            if(pack.score !== undefined){
              p.score = pack.score;
            }
            if(pack.dead !== undefined){
              p.dead = pack.dead;
            }
          }
        }

          for (var i = 0; i < data.bullet.length; i++) {
            var pack = data.bullet[i];
            var b = Bullet.list[data.bullet[i].id]
            if(b){
              if(pack.x !== undefined){
                b.x = pack.x
              }
              if(pack.y !== undefined){
                b.y = pack.y
              }
            }
          }
          });
      /*for (var i = 0; i < data.enemy.length; i++) {
          var pack = data.enemy[i]
          var e = Enemy.list[data.enemy[i].id]
          if(e){
            if(pack.x !== undefined){
              e.x = pack.x
            }
            if(pack.y !== undefined){
              e.y = pack.y
            }
          }
        }
  })*/
        socket.on('remove',function(data){
          for (var i = 0; i < data.player.length; i++) {
            delete Player.list[data.player[i]];
          }
          for (var i = 0; i < data.bullet.length; i++) {
            delete Bullet.list[data.bullet[i]];
          }
      /* for (var i = 0; i < data.enemy.length; i++) {
            delete Enemy.list[data.enemy[i]];
          }*/
        })
/*function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    refreshLoop();
  });
}

refreshLoop();*/
var playersInGame;
    function mainLoop(){
      window.requestAnimationFrame(mainLoop)
       playersInGame = Object.keys(Player.list).length;
        ctx.clearRect(0,0,2000,2000);
        if(selfId){
       ctx.globalAlpha =1;
       for (var i in Player.list) {
          drawMap();
        }
        for(var i in Player.list){
             var p = Player.list[i]
          //   drawScore();
           p.draw()
           ctx.fillStyle= 'black'
           ctx.font ='20px Cursive'
         }
       for(var j in Bullet.list){
      Bullet.list[j].draw()
       }

    /*for (var j in Enemy.list) {
      var e = Enemy.list[j]
      e.draw()
    }*/

      /* if(p.gun =='AR'){
         ctx.fillText("Triggerman",1235,570)
       }else if(p.gun =='SMG'){
         ctx.fillText("Too Fast",1235,570)
       }else if(p.gun =='SR'){
         ctx.fillText("Boom!3",1255,570)
       }*/
      /* ctx.font = '15px Helvetica'
       ctx.fillStyle = 'white'
       var f = p.fps.getFPS()
       ctx.fillText('FPS : '+f,20,20)
       ctx.fillStyle='white'
       ctx.font ='20px Helvetica '
  //     ctx.fillText(players,600,300)
       if(p.gun == 'AR'){
         ctx.fillText(p.ammo.AR + '/30',1260,600)
       }else if(p.gun == 'SMG'){
         ctx.fillText(p.ammo.SMG +'/24',1260,600)
       }else if(p.gun ='SR'){
         ctx.fillText(p.ammo.SR +'/3',1270,600)
       }
      ctx.font = 'Arial 30pt'
      }
     }
     for(var i in Player.list){
       var p = Player.list[i]
 if(p.ammo.AR < 1 || p.ammo.SMG <1 ||p.ammo.SR < 1){
  p.ammo.AR = 30; p.ammo.SMG = 24;
  p.ammo.SR =3;
}*/
   }
      ctx.fillText(playersInGame + " Players",300,20)
 }
   mainLoop()
      var drawMap = function(){
        ctx.globalAlpha = 1;
        var x = width1/2 - Player.list[selfId].x;
        var y= height1/2 - Player.list[selfId].y;
        ctx.fillStyle = "#bbbcbd"
        ctx.fillRect(x,y,map1.width,map1.height)

      //  ctx.drawImage(map,x,y,2420,1500)
    //    ctx.fillStyle ='white'
  //      ctx.fillRect(xD,yD,2420,1500)
    /*    for(var x = 20; x < 2420; x+=20){
          for(var y = 20; y < 1500; y+=20){
            ctx.fillStyle='black'
            ctx.fillRect(x,y,2,2)
          }
        }*/

  ctx.fillStyle = "rgb(175, 175, 175)"
        ctx.fillRect(x,y,250,map1.height)
            ctx.fillRect(x+map1.width - 250,y,250,map1.height)
              //drawing drawPlatform
              ctx.fillStyle = "#2985c2"
                ctx.fillRect(x+600,y+map1.height-125,500,125)
      }



      var drawScore = function(){
        ctx.fillStyle = 'white'
        ctx.fillText(Player.list[selfId].score + " Kills",20,50);
      }
      var chatText = document.getElementById('chat-text')
      var chatInput = document.getElementById('chat-input')
      var chatForm = document.getElementById('chat-form')
      canvas.onmouseup = function(e){
        document.getElementById("chat-input").blur()

    //    for(var i in Player.list){
  //      Player.list[selfId].chatMode = false;
    //  }
        socket.emit('chatMode',{chat:false})
      }
      chatForm.onsubmit = function(e){
        e.preventDefault();
        document.getElementById("chat-input").blur()
        if(chatInput.value !== "" && chatInput.value !== "/" ){
        socket.emit('sendMsgToServer',chatInput.value)
      //  for(var i in Player.list){
      //  Player.list[selfId].chatMode = false;
    //  }
        chatInput.value = '';
      }
          socket.emit('chatMode',{chat:false})
      }
      usernameForm.onsubmit = function(e){
        e.preventDefault();
      }
      var submit = document.getElementById("submit");
submit.onmousedown = function(e){
        e.preventDefault();
        socket.emit('Play',{username:signDivUsername.value})
        signDivUsername.value ='';
      }
      document.onkeydown = function(e){
        if(e.keyCode ===68|| e.keyCode === 39){
          socket.emit('keyPress',{inputId:'right',state:true})
        }else if(e.keyCode === 83|| e.keyCode === 40){
          socket.emit('keyPress',{inputId:'down',state:true})
        }else if(e.keyCode === 65|| e.keyCode ===37){
          socket.emit('keyPress',{inputId:'left',state:true})
        }else if(e.keyCode ===87|| e.keyCode === 38){
          socket.emit('keyPress',{inputId:'up',state:true})
        }else if(e.keyCode === 32){
          socket.emit('keyPress',{inputId:'super',state:true})
        }/*else if(e.keyCode === 49){
          for(var i in Player.list){
            var p = Player.list[i]
            p.gun = 'AR';
            socket.emit('swap',{gun:p.gun})
          }
        }else if(e.keyCode ==50){
          for(var i in Player.list){
            var p = Player.list[i]
            p.gun = 'SMG';
            socket.emit('swap',{gun:p.gun})
          }
        }else if(e.keyCode == 51){
          for(var i in Player.list){
            var p = Player.list[i]
            p.gun = 'SR';
            socket.emit('swap',{gun:p.gun})
          }*/
        else if(e.keyCode == 191){
        document.getElementById("chat-input").focus()
          document.getElementById("chat-input").value = '';
      //  for(var i in Player.list){
      //  Player.list[selfId].chatMode = true;
    //  }
                socket.emit('chatMode',{chat:  true})
        }

      }
