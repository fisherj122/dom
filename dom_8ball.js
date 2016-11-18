

function getInput() {

  var input = document.getElementById("inputField").value;
  var amount = parseFloat(input);
  var ourVal = amount * .2;
  var total = amount + ourVal;

  document.getElementById("outputText").innerHTML = "You should tip " + ourVal + " and your total bill will come to " + total;
}
