// $('div.one').delay(500).attr('class', '');


// Change class from A to B after 1000 ms

// const element = document.querySelector('.my-element');
// element.classList.add('animate__animated', 'animate__bounceOutLeft');

// element.addEventListener('animationend', () => {
//   // do something
// });
const animateCSS = (element, animation, delay, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(`.${element}`);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      if (delay!=0) {
        setTimeout(() => {  node.classList.add('invisible'); }, delay * 1000);
      }
      
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
});
animateCSS('name', 'zoomIn', 4);
animateCSS('two', 'zoomIn', 2);
animateCSS('three', 'rotateIn', 6);
setTimeout(() => {  document.querySelector('.one').classList.add('animate__animated', 'animate__zoomOut'); }, 6 * 800);
animateCSS('wish-hbd', 'fadeInUpBig', 0);
animateCSS('wishText', 'fadeIn',0 );
animateCSS('heart', 'bounceInLeft',0 );
animateCSS('refresh-btn', 'bounceIn',0 );
animateCSS('heart-icon', 'heartBeat', 0);
//animateCSS('smile', 'pulse', 0);
//setTimeout(() => { createBalloons(100); }, 4 * 800);

/* Balloon animation from https://codepen.io/Jemimaabu/pen/vYEYdOy */
function random(num) {
  return Math.floor(Math.random()*num)
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5)+5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container")
  for (var i = num; i > 0; i--) {
  var balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.cssText = getRandomStyles();
  balloonContainer.append(balloon);
  }
}

window.onload = function() {
  createBalloons(50);
}
function refreshPage(){
  window.location.reload();
} 
var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    var timer = setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        //document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
setTimeout(function () {
      clearInterval(timer);
  }, 22000);
// const time = setTimeout(function () {
//   $('div.one').removeClass("one").addClass("B");
// }, 10000);
// time
// const element = document.querySelector('.one');
// element.classList.add('animate__animated', 'animate__bounceOutLeft');
