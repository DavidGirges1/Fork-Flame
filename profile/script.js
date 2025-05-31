const logoutTrigger = document.querySelector('.profile-logout-trigger');
const modal = document.querySelector('.modal');
const cancelBtn = document.querySelector('.Cancelbtn');
const logoutBtn = document.querySelector('.logoutbtn');
const modalBox = document.querySelector('.modal-box');

logoutTrigger.addEventListener('click', () => {
  modal.classList.add('show');
});

cancelBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
  if (!modalBox.contains(e.target)) {
    modal.classList.remove('show');
  }
});

logoutBtn.addEventListener('click', () => {
  alert("You have logged out!");
  modal.classList.remove('show');
});
