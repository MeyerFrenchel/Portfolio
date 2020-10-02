// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const infoButtonFront1 = document.getElementById('inffo-front-1');
const infoButtonBack1 = document.getElementById('inffo-back-1');
const cardSideFront1 = document.getElementById('csf1');
const cardSideBack1 = document.getElementById('csb1');

const infoButtonFront2 = document.getElementById('inffo-front-2');
const infoButtonBack2 = document.getElementById('inffo-back-2');
const cardSideFront2 = document.getElementById('csf2');
const cardSideBack2 = document.getElementById('csb2');

const infoButtonFront3 = document.getElementById('inffo-front-3');
const infoButtonBack3 = document.getElementById('inffo-back-3');
const cardSideFront3 = document.getElementById('csf3');
const cardSideBack3 = document.getElementById('csb3');

const infoButtonFront4 = document.getElementById('inffo-front-4');
const infoButtonBack4 = document.getElementById('inffo-back-4');
const cardSideFront4 = document.getElementById('csf4');
const cardSideBack4 = document.getElementById('csb4');

const infoButtonFront5 = document.getElementById('inffo-front-5');
const infoButtonBack5 = document.getElementById('inffo-back-5');
const cardSideFront5 = document.getElementById('csf5');
const cardSideBack5 = document.getElementById('csb5');



//Set Initial state of menu 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //Set Menu State
    showMenu = false;
  }
}
var infoBtnFrontArr = [infoButtonFront1, infoButtonFront2, infoButtonFront3, infoButtonFront4, infoButtonFront5];

var infoBtnBackArr = [infoButtonBack1, infoButtonBack2, infoButtonBack3, infoButtonBack4, infoButtonBack5];

var cardSideFrontArr = [cardSideFront1, cardSideFront2, cardSideFront3, cardSideFront4, cardSideFront5];

var cardSideBackArr = [cardSideBack1, cardSideBack2, cardSideBack3, cardSideBack4, cardSideBack5];



for(let i = 0; i < infoBtnFrontArr.length; i++) {
  infoBtnFrontArr[i].addEventListener('click',rotate);

  function rotate() {
    
      cardSideFrontArr[i].style.transform = "rotateY(180deg)";
    cardSideBackArr[i].style.transform = "rotateY(0deg)"; 
    
    
  }
}
  
 


for(let i = 0; i < infoBtnBackArr.length; i++) {
  infoBtnBackArr[i].addEventListener('click',rotate2);
  function rotate2() {
    
    
      cardSideFrontArr[i].style.transform = "rotateY(0deg)";
    cardSideBackArr[i].style.transform = "rotateY(-180deg)";
    
    
  }
}
  






 
  

