let vx=0;
let vy=0;
let px=0;
let py=0;
let startX;
let startY;
let Dx;
let Dy;

function updatePos(pos,targetX,targetY){
  if (vx == 0 && vy == 0){
    startX = pos[0];
    startY = pos[1];
    Dx = targetX-startX;
    Dy = targetY-startY;
    px=startX;
    py=startY;
  }
  
  
  
  vx = vx+0.5;
  vy = vy;//+0.5;
  px = px + vx;
  py = py + vy;
  return [px,py];
  
  
  
}






