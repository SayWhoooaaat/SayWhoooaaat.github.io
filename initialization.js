
function initGUI0(){
  // Oppdater posisjoner
  for (let i = 0; i < iPos.length; i++) {
    pos[i] = [];
    pos[i][0] = iPos[i][0][0];
    pos[i][1] = iPos[i][0][1];
  }

  lVoltUI.hide();
  tPowerUI.hide();
  zonesUI.hide();
  panelsUI.hide();
  coilsUI.hide();

  button.remove();
  
  for (let i = 0; i < vList.length; i++) {
    cbList[i].hide();
  }

  powerUI.value = round(powerUI.value, 0);
  powerUI.resetValue();
  
  button = createButton('Hjelp');
  button.mousePressed(GUIchange);

  // Cycle code once
  registerInput();
  calculate();
  reDraw();
}

function initGUI2(){
  // Oppdater posisjoner
  for (let i = 0; i < iPos.length; i++) {
    pos[i] = [];
    pos[i][0] = iPos[i][1][0];
    pos[i][1] = iPos[i][1][1];
  }

  button.remove();
  button = createButton('Skjul effektfordeling');
  button.mousePressed(GUIchange);
  voltUI.hide();

  // Cycle code once:
  registerInput();
  calculate();
  vListUpdate = true;
  reDraw();
}

function createBoxes(){
  // GUI1 boxes
  voltUI = new UIparameter('Spenning:', 'V', 230, true);
  powerUI = new UIparameter('Effekt:', 'W', 4700, true);
  tempUI = new UIparameter('Ovnstemp.:', '\u00B0C', 630, true);
  resUI = new UIparameter('Motstand:', '\u03A9', 0, false);
  lengthUI = new UIparameter('Spirallengde', 'mm', 840, true);
  diaUI = new UIparameter('Ytterspiraldia.', 'mm', 45, true);
  
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
  
}



