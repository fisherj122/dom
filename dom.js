
var  hiLo = Math.floor((Math.random() * 100) + 1);
var count = 0;
console.log(hiLo);

  var name = "";
function getInput() {
  var input = document.getElementById("inputField").value;
  var num = parseInt(input);



  if (count===0) { name = input }
  console.log(name);
  if (num===hiLo) {
    document.getElementById("outputText").innerHTML = "You win " + name;
  }

  if (num !== hiLo) {
    count++;
    if (num<hiLo) {
      document.getElementById("outputText").innerHTML = "Your guess was too low. Try again."
    }
    if (num>hiLo) {
      document.getElementById("outputText").innerHTML = "Your guess was too high. Try again."
    }
  }
 }
