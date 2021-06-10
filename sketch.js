
function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  playerAnim = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  var track = createSprite(200,200);
  track.addImage(trackImg);
  track.velocityY = 5;
  track.scale = 1.2

  var player = createSprite(200,300);
  player.addAnimation("running Animation",playerAnim);

}

function draw() {
  background(0);

  track.velocityY = 5;

  if(track.y > 380){
    track.y = height/2;
  }
  drawSprites();
}
