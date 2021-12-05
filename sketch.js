/*

let monkeys = [];
let a = 4;

function preload() {
for(let i=0; i < 5; i++) {
 monkeys[i] = loadImage("./assets/images/monkey" + i + ".jpg");
}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  imageMode(CENTER);
  image(monkeys[a], width/2, height/2, monkeys[a].width/4, monkeys[a].height/4);
}

function keyPressed () {
  if (keyCode == 49) {
    a = 1;    
  } else if(keyCode == 50) {
    a = 2;
  } else if(keyCode == 51){
    a = 3;
  } else if(keyCode == 52) {
    a = 0;
  } else {

    a=4;
  }
}*/
let monkeys = [];
let a = 4;
let sound = [];
let jungle;
let leaves;
let xLeaf = 500;
let yLeaf = 400; // apparently i can not assign the value "width/2" (or height) when declaring a variable outside of a function? idk it just doesn't work using that value, while if i use it inside of a function it does work
let infomonkey;

function preload() {
  infomonkey = loadJSON("./assets/monkeys.json");
  jungle = loadImage("./assets/images/jungle.jpg");
  leaves = loadImage("./assets/images/foglia.png")
  // for cycles to get multiple files into an array
for(let i=0; i < 5; i++) {
 monkeys[i] = loadImage("./assets/images/monkey" + i + ".png");
}
for(let i=0; i < 5; i++) {
  sound[i] = loadSound("./assets/audio/audio" + i + ".mp3");
 }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(jungle);
  
  //analyzer = new p5.Amplitude(); for some reasons here it doesn't communicate properly with the file in hte libraries the idea was to make the monkeys move to the sound
  //analyzer.setInput(sound);
}


function draw() {
  textAlign(CENTER, CENTER);
  textFont("Rubik Mono One");
  textSize(20);

  imageMode(CENTER);
  image(monkeys[a], width/2, height/2, monkeys[a].width/8*infomonkey.monkeys[a].popolazione/100000, monkeys[a].height/8*infomonkey.monkeys[a].popolazione/100000);

  image(leaves, xLeaf, yLeaf, leaves.width/5, leaves.height/5)
  fill("white");
  text("drag the leaves away and press 1-4 keys to choose a monkey", width/2, height/4);
  text("click to stop the sound", width/2, height/4+50);
  text("size is proportionated to the population of the primate", width/2, 7*height/8);


  //volume = analyzer.getLevel();
  //volume = map(volume,0,1,-100,100
  //console.log(volume)

}

function mouseDragged() { // i'm well aware that this may be totally useless if the leaf is not directly over the pic but see above why i couldn't do it, maybe i could try using a bubble but idk
  if ((mouseX > xLeaf - 50) && (mouseX < xLeaf + 50)) {
    if ((mouseY > yLeaf - 50) && (mouseY < yLeaf + 50)) {
      xLeaf = mouseX;
      yLeaf = mouseY;
    }
  }
}


// this whole function underneath it used to work fine; pressing the key the pic was changing and the previous one disappeared. Suddently it wasn't working anymore. I don't know, I don't think I've changed anything but who knows. 
function keyPressed () {
  if (keyCode == 49) { //gorilla
    a = 1;
    sound[0].stop();
    sound[2].stop();
    sound[3].stop();
    
    sound[1].play();
    
  } else if(keyCode == 50) { //orango?
    a = 2;

    sound[0].stop();
    sound[1].stop();
    sound[3].stop();

    sound[2].play();
  } else if(keyCode == 51){ // siamango?
    a = 3;
    sound[0].stop();
    sound[1].stop();
    sound[2].stop();

    sound[3].play();
  } else if(keyCode == 52) { // sciampnze
    a = 0;
    sound[1].stop();
    sound[2].stop();
    sound[3].stop();

    sound[0].play();
  } else { // easter egg
    a=4;
    sound[1].stop();
    sound[2].stop();
    sound[3].stop();
    sound[0].stop();
    sound[4].play();

  }
}

function mouseClicked() {
    if(pmouseX < monkeys[a].width/4, pmouseY < monkeys[a].height){
      sound[0].stop();
      sound[1].stop();
      sound[2].stop();
      sound[3].stop();
      sound[4].stop();}
    }
  
 