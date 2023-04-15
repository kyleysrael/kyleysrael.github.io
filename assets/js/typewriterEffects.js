const targets = ["Kyle Cua", "a front-end", "web developer"]; // the texts to be animated
const delay = 250; // the delay between each character (in milliseconds)
const target = document.getElementById("typewriter"); // the target element to animate

let currentTargetIndex = 0;
let currentText = targets[currentTargetIndex];

function type() {
  if (currentText.length > 0) {
    target.innerHTML += currentText.charAt(0);
    currentText = currentText.substring(1);
    setTimeout(type, delay);
  } else {
    currentTargetIndex = (currentTargetIndex + 1) % targets.length;
    currentText = targets[currentTargetIndex];
    target.innerHTML = ''; // clear the target element's content
    setTimeout(type, delay * 5); // add a longer delay between texts
  }
}

type();
