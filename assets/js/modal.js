const modal = document.getElementById('simpleModal');
const emptyModal = document.getElementById('simpleModal-2');
const modalBtn = document.querySelectorAll('.modal-btn');
const emptyModalBtn = document.querySelectorAll('.modal-btn2');
const closeBtn = document.querySelectorAll('.closeBtn')[0];
const body = document.querySelector('body');

modalBtn.forEach(function(e) {
e.addEventListener('click', openModal);
})

closeBtn.addEventListener('click', closeModal);

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

emptyModalBtn.forEach(function(e) {
  e.addEventListener('click', openEmptyModal);
})

function openEmptyModal(){
  emptyModal.style.display = "block";
  body.classList.add('no-scroll');
}

function closeEmptyModal() {
  emptyModal.style.display = "none";
  body.classList.remove('no-scroll');
}
