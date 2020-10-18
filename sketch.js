let img;
let alloyData;
let table = [];
let tableWidth;
let elementTemp;
let vList = [];
let vListUpdate = true;
let vChoices = [];

let GUI = 0;

let iPos = [
  [[-500, 29], [12, 29]], //GroupA
  [[-500, 350], [40, 350]], //GroupB
  [[-500, 650], [20, 650]], //GroupC
  [[50, 50], [50, -300]], //Group1
  [[40, 300], [540, 10]], //Group2
  [[20, 530], [520, 230]] //Group3
];
let pos = [];

function preload() {
  img = loadImage('Sketch1.png');
  img2 = loadImage('Sketch2.png');
  img3 = loadImage('Sketch3.png');
  img4 = loadImage('Sketch4.png');
  img5 = loadImage('Sketch5.png');
  img6 = loadImage('Sketch6.png');
  alloyData = loadJSON("alloys.json");
}

function setup() {
  createCanvas(1100, 1100);
  // setup initial positions
  for (let i = 0; i < iPos.length; i++) {
    pos[i] = [];
    pos[i][0] = iPos[i][0][0];
    pos[i][1] = iPos[i][0][1];
  }
  // creating UI boxes
  createBoxes();
  // Button
  button = createButton('Hjelp');
  button.mousePressed(GUIchange);

  calculate();
  reDraw();
}


function keyPressed() {
  if (keyCode === ENTER) {
    registerInput();
    calculate();
    reDraw();
  }
}




// ENDRE GUI-MODUS
function GUIchange() {
  if (GUI == 0) {
    GUI = 1;
  } else if (GUI == 2) {
    GUI = 3;
  }
}



function draw() { // Brukes for animasjoner
  if (GUI == 1) {
    // slide
    slidePos(0,2);
    reDraw();

    if (pos[4][0] == 10000) {
      GUI = 2;
      initGUI2();
    }
  } else if (GUI == 3) {
    // Slide tilbake
    slidePos(2,0);
    reDraw();    

    if (pos[4][0] == 10000) {
      GUI = 0;
      initGUI0();
    }
  }
}

function slidePos(oldPos,newPos){
  for (let i = 0; i < iPos.length; i++){
    pos[i] = updateGroupPos(i,oldPos,newPos);
  }
}


/* UNØYAKTIGHETER:

Er ikke toggle for kontaktor/thyristor
Kina-N80 kan ha andre verdier
Elementtemp kan variere

 - UP NEXT:

display step 1, step 2...

display 2s, 3s ...

display enter animation




materialvalg

panel-coils-coils i stein
paneltabell


Ekspert - kontorfyr - unge


*/