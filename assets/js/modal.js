// Modal Button

// Get modal element
const modal = document.getElementById('simpleModal');
// All page modals
var modals = document.querySelectorAll('.modal');
// Get open modal button
const modalBtn = document.querySelectorAll('.modal-btn');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const body = document.querySelector('body');

// Listen 	for OPEN Click
modalBtn.forEach(function(e) {
e.addEventListener('click', openModal);
})
// Listen for CLOSE Click
closeBtn.addEventListener('click', closeModal);
// Listen for OUTSIDE Click
window.addEventListener('click', outsideClick);

// Function to OPEN modal
function openModal() {
  modal.style.display = "block";
  body.classList.add('no-scroll');
}

// Function to CLOSE modal
function closeModal() {
  modal.style.display = "none";
  body.classList.remove('no-scroll');

}
// Function to CLOSE modal
function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
}
