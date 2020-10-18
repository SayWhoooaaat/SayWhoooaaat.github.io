function updateGroupPos(pIndex, pos1, pos2) {
  // ex: group1, 0, 2
  let xi = pos[pIndex][0];
  let yi = pos[pIndex][1];

  let xs = iPos[pIndex][pos1 / 2][0];
  let ys = iPos[pIndex][pos1 / 2][1];

  let xf = iPos[pIndex][pos2 / 2][0];
  let yf = iPos[pIndex][pos2 / 2][1];

  let steps = 18;
  let xi2 = xi + (xf - xs) / steps;
  let yi2 = yi + (yf - ys) / steps;

  if (abs(xi - xs) > abs(xf - xs) || abs(yi - ys) > abs(yf - ys)) {
    // stop
    xi2 = 10000;
    
  }


  return [xi2, yi2];


}