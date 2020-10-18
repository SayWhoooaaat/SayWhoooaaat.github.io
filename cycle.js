function registerInput() {
  // Update input parameters
  voltUI.value = float(voltUI.inputField.value());
  powerUI.value = float(powerUI.inputField.value());
  tempUI.value = float(tempUI.inputField.value());
  lengthUI.value = float(lengthUI.inputField.value());
  diaUI.value = float(diaUI.inputField.value());
  // Spenningsfordeling
  if (GUI == 2) {
    lVoltUI.value = float(lVoltUI.inputField.value());
    tPowerUI.value = float(tPowerUI.inputField.value());
    zonesUI.value = float(zonesUI.inputField.value());
    panelsUI.value = float(panelsUI.inputField.value());
    coilsUI.value = float(coilsUI.inputField.value());
  }
}



function calculate() {
  // spenningsfordeling
  if (GUI == 2) {
    zPowerUI.value = tPowerUI.value / zonesUI.value;
    gPowerUI.value = zPowerUI.value / panelsUI.value;
    powerUI.value = gPowerUI.value / coilsUI.value * 1000;

    vList = voltList(lVoltUI.value, panelsUI.value * coilsUI.value);
    vChoices = checkVboxes();
  }
  if (GUI == 0) {
    vChoices = [];
    vChoices[0] = voltUI.value;
  }

  // calculate R & temp
  resUI.value = voltUI.value * voltUI.value / powerUI.value;
  elementTemp = tempUI.value + 100;

  // calculate table
  tableCalc();

}




