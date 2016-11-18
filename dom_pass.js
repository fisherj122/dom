
//----------CHECKS ----------//

function passNotSame(pw) {
  return pw !== "password";
}

function checkChar(x) {
  return (x.includes("#") || x.includes("!") || x.includes("$"));
}

function length(id, pw) {
  return (id.length >= 6 && pw.length >= 6)
}

function chars(id, pw) {
  return (!checkChar(id) && checkChar(pw))
}

function notSame(id, pw) {
  return (id !== pw)
}

function passChars(pw) {
  return (pw.toLowerCase() !== pw && pw.toUpperCase() !== pw)
}

function passNums(pw) {
  count = 0;
  for (i=0; i<pw.length; i++) {
    char = pw[i];
    if (!isNaN(parseInt(char))) { count ++ }
  }
  return count>0;
}


//------- EVALUATE INPUT ---------//

function getInput() {
  var uname = document.getElementById("userField").value;
  var pass = document.getElementById("passField").value;

  console.log(uname);
  console.log(pass);

  if (passNotSame(pass) && length(uname, pass) && chars(uname, pass) && notSame(uname, pass) && passChars(pass) && passNums(pass)) { document.getElementById("outputText").innerHTML="valid" }

  else { document.getElementById("outputText").innerHTML="invalid" }
}
