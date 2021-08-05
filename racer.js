window.addEventListener('load', function(e) {
  console.log('racer.js loaded');
  init();
});

function init() {
  document.addEventListener('keydown', function(e) {
    let carId = qOrR(e.key);
    moveCar(carId, e.keyEvent);
  });
}

function qOrR(key) {
  if (key === 'q') {
    return "redCar";
    // console.log('red car');
  }
  if (key === 'r') {
    return "blueCar";
    // console.log('blue car');
  }
}

function moveCar(id, keyEvent) {
  let car = document.getElementById(id);
  let marginPx = window.getComputedStyle(car).marginLeft;
  let currMargin = parseInt(marginPx.substr(0, marginPx.length - 2));
  let updatedMargin = parseInt(currMargin + 5) + "px";
  car.style.marginLeft = updatedMargin;


}
