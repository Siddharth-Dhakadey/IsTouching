var fixrect, movrect

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movrect=createSprite(100,100,50,50);
}

function draw() {
  background(140,51,16);  
  movrect.x=mouseX;
  movrect.y=mouseY;
  console.log(fixrect.y-movrect.y);
  if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2&&
    fixrect.x-movrect.x< movrect.width/2+fixrect.width/2&&
    movrect.y-fixrect.y<movrect.height/2+fixrect.height/2&&
    fixrect.y-movrect.y<movrect.height/2+fixrect.height/2){
    fixrect.shapeColor="yellow";
    movrect.shapeColor="yellow";
  }
  else{
    fixrect.shapeColor="green";
    movrect.shapeColor="green";
  }
  drawSprites();
}