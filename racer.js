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
  // console.log(updatedMargin);
  car.style.marginLeft = updatedMargin;
  // console.log(car.style.marginLeft);
  // console.log(margin);
  // car.racer.marginLeft += 20;
  // console.log("car pressed");
  //
  // car1.style.marginLeft = margin;

}

// function gas(key) {
//   if (key === 'p') {
//     console.log('blue');
//   } else if (key === 'q') {
//     console.log('red');
//   } else {
//     console.log('Wrong key, dummy!');
//   }
// }
