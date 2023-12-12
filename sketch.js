function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch()  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=6 && hour<=4){
      bg = "sprites/snow1jpg";
  }
  else{
      bg = "sprites/snow2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}