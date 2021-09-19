var canvs = document.getElementById('canv');
var c = canvs.getContext('2d');
var an = Math.PI;
let ast = [new Comet(100,100,2,2,1,1),new Comet(400,300,2,2,1,2)];
var vx = 0;
var vy = 0;
var shots = [];

canvs.width = innerWidth;
canvs.height = innerHeight;
var f = new Fire(0,30,canvs.width/2,canvs.height/2)
var po = new Point(25,25,canvs.width/2,canvs.height/2,3)
var pe = new Point(0,-40,canvs.width/2,canvs.height/2,3)
var pr = new Point(-25,25,canvs.width/2,canvs.height/2,3)
addEventListener('keydown', function(e){

 console.log(e.keyCode)
  if(e.keyCode == 39){
    po.rte(1)
    pe.rte(1)
    pr.rte(1)
    f.rte(1)
     an-=Math.PI/30
  }
  if(e.keyCode == 32){
  shots.push(new Shot(pe.x+pe.rx,pe.y+pe.ry,Math.sin(an)*10+vx,Math.cos(an)*10+vy))

  }
  if(e.keyCode == 37){
    po.rte(2)
    pe.rte(2)
    pr.rte(2)
    f.rte(2)
   an+=Math.PI/30
  }
  if(e.keyCode==38){
      f.draw(c)
    vx+=Math.sin(an)/3
    vy+=Math.cos(an)/3

  }
})
setInterval( ()=> {
  let p;
  let r = Math.random()
  if(r<.33){
 p =1
  }else{
    if(r>.66){
    p=2
    }else{
      p=3
    }
  }

  if(Math.random()<.5){
    y = Math.random()<0.5 ? 0-110 : canvs.height+110
    x =Math.random()*canvs.width;
  }else{
  y = Math.random()<0.5 ? 0-110 : canvs.width+110
  x =Math.random()*canvs.height;
}
  const angs =Math.atan2(po.ry-y,po.rx-x)
  const vxs = Math.cos(angs)*3
  const vys = Math.sin(angs)*3
  ast.push(new Comet(x,y,p,p,vxs,vys));
},5000)
function a(){




  let indx = 0;
  //console.log(vy)
  if(an>6.283185307179586){
    an = an-6.283185307179586;
  //    console.log("asd")
  }
  //console.log(vx)
//  c.clearRect(0,0,1000,1000)
  c.beginPath()
  c.fillStyle = "rgba(0,0,0,0.5)"
  c.rect(0,0,canvs.width,canvs.height);
  c.fill();
  for(let sh of shots){
  //  console.log(sh.vx,sh.vy)
    sh.draw(c);
    sh.mouve();
    sh.live()
    if(sh.h>400){
      shots.splice(indx,1)
    }
    if(sh.x>canvs.width+50){
      sh.x = 0;
    }
    if(sh.x<-50){
      sh.x=canvs.width
    }
    if(sh.y>canvs.height+50){
      sh.y=0
    }
    if(sh.y<-50){
      sh.y=canvs.height
    }

    indx++;
  }
  c.strokeStyle = 'white'
  c.moveTo(po.x+po.rx,po.y+po.ry)
  c.lineTo(pe.x+pe.rx,pe.y+pe.ry)
  c.lineTo(pr.x+pr.rx,pr.y+pr.ry)
  c.lineTo(po.x+po.rx,po.y+po.ry)
  c.stroke()
  po.draw(c)
  pe.draw(c)
  pr.draw(c)



  f.ry+=vy
  f.rx+=vx
  po.ry+=vy
  po.rx+=vx
  pe.ry+=vy
  pe.rx+=vx
  pr.ry+=vy
  pr.rx+=vx
  vx=vx*0.99
  vy=vy*0.99
  if(po.rx>canvs.width+50){
  pr.rx=0
  po.rx=0
  pe.rx=0
  f.rx =0
  }
  if(po.ry>canvs.height+50){
  pr.ry=0
  po.ry=0
  pe.ry=0
  f.ry =0
  }
  if(po.rx<-50){
  pr.rx=canvs.width
  po.rx=canvs.width
  pe.rx=canvs.width
  f.rx =canvs.width
  }
  if(po.ry<-50){
  pr.ry=canvs.height
  po.ry=canvs.height
  pe.ry=canvs.height
  f.ry =canvs.height
  }
  if(vx>-0.05&&vx<0){
    vx=0;
    //    console.log('ass')
  }
  if(vy>-0.05&&vy<0){
    //    console.log('ass1')
    vy = 0;
  }
   if(vx<0.05&&vx>0){
    //     console.log('ass2')
     vx=0;
   }
   if(vy<0.05&&vy>0){
    //     console.log('ass3')
     vy = 0;
   }
   let indxs = 0
 for(let ad of ast){
   ad.draw(c)
   ad.rotate()
   ad.mov()
   if(a.rx>canvs.width+200){
     ast.splice(indxs,1)
   }
   if(a.ry>canvs.height+200){
     ast.splice(indxs,1)
   }
   if(a.rx<-200){
     ast.splice(indxs,1)
   }
   if(a.ry<-200){
     ast.splice(indxs,1)
   }
   indxs++;
 }
 let aidx = 0;
 let asdx = 0;
  for (var astd of ast) {
aidx = 0;
  for(var sh of shots){
    console.log(Math.hypot(astd.rx-sh.x,astd.ry-sh.y));
    if(Math.hypot(astd.rx-sh.x+50,astd.ry-sh.y+50)<70){

      ast.splice(asdx,1);
      shots.splice(aidx,1)

    }

    aidx++;
  }
      asdx++;
  }

  requestAnimationFrame(a)
}

a()
