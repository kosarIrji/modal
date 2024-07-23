'use strict';
let $ = document;
let overlay = $.querySelector('.overlay');
let btnCloseModal = $.querySelector('.close-modal');
let btnOpenModal = $.querySelector('.show-modal');
let modal = document.querySelector('.modal');
let textName = document.querySelector('.nameEror');
let btnSubmite = document.querySelector('.submit');

///// input checks

const checkName = function (n) {
  document.querySelector('.name').innerHTML = '';
  const chars = n.split('');
  if (chars.length == 0)
    document.querySelector('.name').innerHTML = 'Name is empty!';
  if (chars.find(Number))
    document.querySelector('.name').innerHTML = 'Enter correct name!';
};
const i = 'kjhg';
i.substring;

const checkEmail = function (n) {
  document.querySelector('.email').innerHTML = '';
  if (n.length == 0) {
    document.querySelector('.email').innerHTML = 'Email is empty!';
  }
  if (n.substring(n.length - 10) !== '@gmail.com') {
    document.querySelector('.email').innerHTML = 'Email is not ture!';
  }
};

const checkPassword = function (n) {
  document.querySelector('.password').innerHTML = '';
  if (n.length == 0) {
    document.querySelector('.password').innerHTML = 'Password is empty!';
  }
  const chars = n.split('');
  if (!chars.find(Number) && chars.find(String)) {
    document.querySelector('.password').innerHTML =
      'Password shoud be contains number,character and letter!';
  }
};
/////submit;
btnSubmite.addEventListener('click', function () {
  let nameValue = document.querySelector('#name').value;
  checkName(nameValue);

  let emailValue = document.querySelector('#email').value;
  checkEmail(emailValue);

  let passwordValue = document.querySelector('#password').value;
  checkPassword(passwordValue);
});
const closeModal = function () {
  modal.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
btnOpenModal.addEventListener('click', openModal);
