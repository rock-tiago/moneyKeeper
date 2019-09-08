function watch() {
  document.getElementById("device").innerHTML = "SmartWatch?";
}

function computer() {
  document.getElementById("device").innerHTML = "Computer?";
}

function checkWatch() {
  let amountMB = parseInt(document.getElementById("answermb").value);
  let amountRL = parseInt(document.getElementById("answerrl").value);
  const allMoney = amountMB + amountRL;
  const smartwatch = 250;
  let moneyAfter = allMoney - smartwatch;
  const moneyLeftToGo = 100 - moneyAfter;
  const moneyLeftOver = moneyAfter - 100;
    if(moneyAfter < 100) {
      document.getElementById("answer").innerHTML = "No, let you father buy it for you! Jk, there is still " + moneyLeftToGo + " euros to go though!";
    } else if (moneyAfter >= 100 ) {
      document.getElementById("answer").innerHTML = "Yes! You good to go. There will be " + moneyLeftOver + " euros over the minimum amount (50).";
   }
}

function checkPc() {
  let amountMB = parseInt(document.getElementById("answermb").value);
  let amountRL = parseInt(document.getElementById("answerrl").value);
  const allMoney = amountMB + amountRL;
  const computer = 1800;
  const afterPc = allMoney - computer;
  const moneyLeftOverPc = afterPc  - 30;
  const moneyToGoPc = 30 - afterPc;
  if(afterPc > 30) {
    document.getElementById("answer").innerHTML = "Yes. Go get that Pc man! You still have " + moneyLeftOverPc + " euros over the minimum amount."
  } else if (afterPc < 30) {
    document.getElementById("answer").innerHTML = "No. You still have " + moneyToGoPc + " euros to go!";
  }
}

function checkTv() {
  let amountMB = parseInt(document.getElementById("answermb").value);
  let amountRL = parseInt(document.getElementById("answerrl").value);
  const allMoney = amountMB + amountRL;
  const smartTv = 220;
  const afterTv = allMoney - smartTv;
  const moneyLeftOverTv = afterTv  - 80;
  const moneyToGoTv = 80 - afterTv;
  if(afterTv > 80) {
    document.getElementById("answer").innerHTML = "Yes. Enjoy the Netflix & Chill ;)! You still have " + moneyLeftOverTv + " euros over the minimum amount."
  } else if (afterTv < 80) {
    document.getElementById("answer").innerHTML = "No. You still have " + moneyToGoTv + " euros to go!";
  }
}

