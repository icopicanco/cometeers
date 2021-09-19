class Point{
  constructor(x,y,rx,ry,r){
    this.x = x;
    this.y = y;
    this.rx = rx;
    this.ry = ry;
    this.r = r;
  }
  rte(d){
    var x1,y1;
    if(d == 1){
    x1 = this.x*Math.cos(Math.PI/30)-this.y*Math.sin(Math.PI/30);
    y1 = this.x*Math.sin(Math.PI/30)+this.y*Math.cos(Math.PI/30);
  }
  if(d == 2){
  x1 = this.x*Math.cos(-Math.PI/30)-this.y*Math.sin(-Math.PI/30);
  y1 = this.x*Math.sin(-Math.PI/30)+this.y*Math.cos(-Math.PI/30);
}

    this.x = x1;
    this.y = y1;
  }
  draw(c){
    c.fillStyle = 'white'
    c.beginPath();
    c.arc(this.x+this.rx,this.y+this.ry,this.r,0,2*Math.PI,false);
    c.fill();
  }
}
class Fire{
  constructor(x,y,rx,ry){
    this.x = x;
    this.y = y;
    this.rx = rx;
    this.ry = ry;
    this.r = 4;
  }
  rte(d){
    var x1,y1;
    if(d == 1){
    x1 = this.x*Math.cos(Math.PI/30)-this.y*Math.sin(Math.PI/30);
    y1 = this.x*Math.sin(Math.PI/30)+this.y*Math.cos(Math.PI/30);
  }
  if(d == 2){
  x1 = this.x*Math.cos(-Math.PI/30)-this.y*Math.sin(-Math.PI/30);
  y1 = this.x*Math.sin(-Math.PI/30)+this.y*Math.cos(-Math.PI/30);
}

    this.x = x1;
    this.y = y1;
  }
  draw(c){
    this.r = Math.random()*5+4
    c.fillStyle = 'orange'
    c.beginPath();
    c.arc(this.x+this.rx,this.y+this.ry,this.r,0,2*Math.PI,false);
    c.fill();
  }
}
class Shot{
  constructor(x,y,vx,vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.h = 0;
  }
  draw(c){
    c.save();
    c.beginPath();
    c.fillStyle='red';
    c.arc(this.x,this.y,5,0,2*Math.PI,false);
  //  console.log(this.x,this.y,this.vx,this.vy);
    c.fill();
    c.restore();
  }
  mouve(){
    this.x+=this.vx;
    this.y+=this.vy;
  }
  live(){
    this.h++

  }

}
class Comet {
  constructor(rx,ry,type,size,vx,vy){
    this.rx = rx;
    this.ry= ry;
    this.type = type;
    this.size = size;
    this.vx = vx;
    this.vy = vy;
    this.comets = {
    c1x : [10,68,86,89,62,21,7,10,19],
    c1y : [6,4,50,82,94,96,77,40,23],
    c2x:  [6,40,59,85,96,86,44,32,13],
    c2y:  [18,5,20,9,38,82,97,76,71],
    c3x:  [7,35,71,92,82,62,70,35,12],
    c3y:  [12,1,9,30,10,56,79,76,55]

  }
  }
  mov(){
    this.rx+=this.vx
    this.ry+=this.vy
  }
  draw(c){
    console.log(this.rx)
    c.beginPath()
    // c.rect(this.rx,this.ry,this.rx,this.ry)
    c.strokeStyle = 'white'
    if(this.type == 1){
      c.moveTo(this.comets.c1x[0]+this.rx,this.comets.c1y[0]+this.ry);
      for(let i =0;i<9;i++){
        c.lineTo(this.comets.c1x[i]+this.rx,this.comets.c1y[i]+this.ry);
      }
      c.lineTo(this.comets.c1x[0]+this.rx,this.comets.c1y[0]+this.ry);
    }
    if(this.type == 2){
      c.moveTo(this.comets.c2x[0]+this.rx,this.comets.c2y[0]+this.ry);
      for(let i =0;i<9;i++){
        c.lineTo(this.comets.c2x[i]+this.rx,this.comets.c2y[i]+this.ry);
      }
      c.lineTo(this.comets.c2x[0]+this.rx,this.comets.c2y[0]+this.ry);
    }
    if(this.type == 3){
      c.moveTo(this.comets.c3x[0]+this.rx,this.comets.c3y[0]+this.ry);
      for(let i =0;i<9;i++){
        c.lineTo(this.comets.c3x[i]+this.rx,this.comets.c3y[i]+this.ry);
      }
      c.lineTo(this.comets.c3x[0]+this.rx,this.comets.c3y[0]+this.ry);
    }
    c.stroke();
  }
  rotate(){
    for(let i = 0;i<9;i++){
    //  console.log(i)
    var x1,y1;
    // if(d == 1){
    var y,x;
    if(this.type == 1){
    y=this.comets.c1y[i]-50
    x=this.comets.c1x[i]-50
  }
  if(this.type == 2){
    y=this.comets.c2y[i]-50
    x=this.comets.c2x[i]-50
  }
  if(this.type ==3){
    y=this.comets.c3y[i]-50
    x=this.comets.c3x[i]-50
  }


      x1 = x*Math.cos(Math.PI/60)-y*Math.sin(Math.PI/60);
      y1 = x*Math.sin(Math.PI/60)+y*Math.cos(Math.PI/60);
      //  console.log(x1);
  // }
  //     if(d == 2){
  //     x1 = this.cometx[i]*Math.cos(-Math.PI/30)-this.comety[i]*Math.sin(-Math.PI/30);
  //     y1 = this.cometx[i]*Math.sin(-Math.PI/30)+this.comety[i]*Math.cos(-Math.PI/30);
  //
  //   }

  if(this.type == 1){
  this.comets.c1y[i]=y1+50
  this.comets.c1x[i]=x1+50
}
if(this.type == 2){
  this.comets.c2y[i]=y1+50
  this.comets.c2x[i]=x1+50
}
if(this.type ==3){
  this.comets.c3y[i]=y1+50
  this.comets.c3x[i]=x1+50
}

    }
  }

}
