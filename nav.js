const navBar = document.getElementById('nav');
const ulList = document.getElementById('ulList');
const headSection = document.getElementById('headSection');
const navImage = document.getElementById('navImage');
const navAlpha = document.getElementById('navAlpha');

function openNavBar() {
    ulList.style.display = 'flex';
    headSection.style.background = '#06100e'
    navImage.style.display = 'none';
    navAlpha.style.display = 'block';
}


function closeNavBar(){
    ulList.style.display = 'none';
    headSection.style.background = 'none'
    navAlpha.style.display = 'none';
    navImage.style.display = 'block';
}




