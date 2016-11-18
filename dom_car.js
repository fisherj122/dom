
alert("Let's make a car");
var year = prompt("What year will your car be?");
var make = prompt("What's the make of your car?");
var model = prompt("What's your car's model?");



var speed = 0;


function createCar(newYear, newMake, newColor) {

  return {
    getInfo: function() {
      return newYear + " " + newMake + " " + newColor;
    },

    getSpeed: function() {
      return speed;
    },

    accelerate: function(x) {
      if (myCar.getSpeed() > 75) {
        x = 85-myCar.getSpeed();
      }
      speed += x;
    },

    brake: function() {
      speed -= Math.floor(Math.random() * (speed / 2));

      if (speed < 7) {
        speed = 0;
      }
    }
  };
}

var myCar = createCar(year, make, model);
var carString = myCar.getInfo();

console.log(carString);
document.getElementById("outputText").innerHTML = "Youre driving a " + myCar.getInfo();

function getInput() {

  var input = document.getElementById("inputField").value;

  if (input === "accelerate") { myCar.accelerate(80); }
  if (input === "brake" ) { myCar.brake() }

  document.getElementById("outputText").innerHTML = "Your speed is " + speed;
}
