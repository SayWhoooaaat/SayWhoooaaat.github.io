let img;
let alloyData;
let table = [];
let tableWidth;
let elementTemp;
let vList = [];
let vListUpdate = true;
let vChoices = [];

let GUI = 0;
let G1pos = [50, 50];
let G2pos = [40, 300];
let G3pos = [20, 530];
let GApos = [12, 20];
let GBpos = [40, 350];
let GCpos = [20, 650];

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
  background(255);
  image(img, 10, 50, 300, 300);

  // creating UI boxes
  voltUI = new UIparameter('Spenning:', 'V', 230, true);
  powerUI = new UIparameter('Effekt:', 'W', 4700, true);
  tempUI = new UIparameter('Ovnstemp.:', '\u00B0C', 630, true);
  resUI = new UIparameter('Motstand:', '\u03A9', 0, false);
  lengthUI = new UIparameter('Spirallengde', 'mm', 840, true);
  diaUI = new UIparameter('Ytterspiraldia.', 'mm', 45, true);

  // Button
  button = createButton('Hjelp');
  button.mousePressed(GUI1);
  
  // UI-boxes SF
  lVoltUI = new UIparameter('Linjespenning:', 'V', 400, true);
  lVoltUI.autoDetect();
  tPowerUI = new UIparameter('Total effekt:', 'kW', 120, true);
  zonesUI = new UIparameter('# temp.reguleringssoner:', 'stk', 2, true);
  panelsUI = new UIparameter('# grupper per sone:', 'stk', 4, true);
  panelsUI.autoDetect();
  zPowerUI = new UIparameter('Effekt i sone:', 'kW', 60, true);
  gPowerUI = new UIparameter('Effekt gruppe:', 'kW', 15, true);
  coilsUI = new UIparameter('Antall coils:', 'stk', 3, true);
  coilsUI.autoDetect();
  

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

function registerInput() {
  // Update input parameters
  voltUI.value = float(voltUI.inputField.value());
  powerUI.value = float(powerUI.inputField.value());
  tempUI.value = float(tempUI.inputField.value());
  lengthUI.value = float(lengthUI.inputField.value());
  diaUI.value = float(diaUI.inputField.value());
  // Spenningsfordeling
  if (GUI == 2){
    lVoltUI.value = float(lVoltUI.inputField.value());
    tPowerUI.value = float(tPowerUI.inputField.value());
    zonesUI.value = float(zonesUI.inputField.value());
    panelsUI.value = float(panelsUI.inputField.value());
    coilsUI.value = float(coilsUI.inputField.value());
    
  }
  
}

function calculate() {
  
  // spenningsfordeling
  if (GUI == 2){
    zPowerUI.value = tPowerUI.value / zonesUI.value;
    gPowerUI.value = zPowerUI.value / panelsUI.value;
    powerUI.value = gPowerUI.value / coilsUI.value * 1000;
    
    vList = voltList(lVoltUI.value,panelsUI.value * coilsUI.value);
    vChoices = checkVboxes();
  }
  if (GUI == 0){
    vChoices = [];
    vChoices[0] = voltUI.value;
  }
  
  // calculate R & temp
  resUI.value = voltUI.value * voltUI.value / powerUI.value;
  elementTemp = tempUI.value + 100;

  // calculate table
  tableCalc();

}


// ---------------- ENDRE GUI-MODUS ------------
function GUI1() {
  if (GUI == 0){
    GUI = 1;
  } else if (GUI == 2){
    GUI = 3;
  }
  
}


function draw() { // Brukes for animasjoner
  if (GUI == 1){
    
    // Slide til høyre
    G1pos[0] = G1pos[0]+40;
    G2pos[0] = G2pos[0]+40;
    G3pos[0] = G3pos[0]+40;
    
    reDraw();
    
    if (G1pos[0] > 550){
      GUI = 2;
      
      button.remove();
      button = createButton('Skjul effektfordeling');
      button.mousePressed(GUI1);
      voltUI.hide();
      
      calculate();
      reDraw();
    }
  } else if (GUI == 3){
    // Slide tilbake
    reDraw();
    G1pos[0] = G1pos[0]-40;
    G2pos[0] = G2pos[0]-40;
    G3pos[0] = G3pos[0]-40;
    
    if (G1pos[0] < 60){
      GUI = 0;
      lVoltUI.hide();
      tPowerUI.hide();
      zonesUI.hide();
      panelsUI.hide();
      coilsUI.hide();
      
      button.remove();
      button = createButton('Hjelp');
      button.mousePressed(GUI1);
      for (let i = 0;i<vList.length;i++){
        cbList[i].hide();
      }
      
      powerUI.value = round(powerUI.value,0);
      powerUI.resetValue();
      
      calculate();
      reDraw();
    }
    
  }
  
}



/* UNØYAKTIGHETER:

Er ikke toggle for kontaktor/thyristor
Kina-N80 kan ha andre verdier

*/