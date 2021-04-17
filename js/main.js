'use strict'

var gIsOpenMenu = false;
var gIsOpenModal = false;

var elMainNav = document.querySelector('.main-nav-links');
var elScreen = document.querySelector('.main-screen');
var elMainBtn = document.querySelector('.main-nav-btn');
var elBody = document.querySelector('body');
var elModal = document.querySelector('.moadl-container');

function toggleScreen() {
    if (gIsOpenMenu) toggleMenu();
    if (gIsOpenModal) toggleModal();
}

function toggleMenu() {
    if (!gIsOpenMenu) {
        gIsOpenMenu = true;
        elMainNav.style.transform = 'translateY(0)';
        elScreen.style.display = 'block';
        elMainBtn.innerHTML = 'X';
        elBody.style.overflow = 'hidden';
    } else {
        gIsOpenMenu = false;
        elMainNav.style.transform = 'translateY(-100%)';
        elScreen.style.display = 'none';
        elMainBtn.innerText = '☰';
        elBody.style.overflow = 'visible';
    }
}

function toggleModal() {
    if (!gIsOpenModal) {
        gIsOpenModal = true;
        elModal.style.display = 'flex';
        elModal.style.position = 'fixed';
        elScreen.style.display = 'block';
        elBody.style.overflow = 'hidden';
    } else {
        gIsOpenModal = false;
        elModal.style.display = 'none';
        elModal.style.position = 'unset';
        elScreen.style.display = 'none';
        elBody.style.overflow = 'visible';
    }
}

function onSubmit() {
    let elEmail = document.querySelector('input[name=user-email]');
    console.log(`Thank You, an email will be sent to ${elEmail.value} adress shortly`);
    toggleModal();
}

