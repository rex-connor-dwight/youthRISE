const navBar = document.getElementById('nav');
const ulList = document.getElementById('ulList');
const headSection = document.getElementById('headSection');
const navImage = document.getElementById('navImage');
const navImageOne = document.getElementById('navImageOne');
const navAlpha = document.getElementById('navAlpha');
const home = document.getElementById('home');
const about = document.getElementById('about');
const yrHeaderLogo = document.getElementById('yrHeaderLogo');
const highlightContainer = document.getElementById('highlightContainer');




     const liDefault = document.getElementById('liDefault');
     const liOne = document.getElementById('liOne');
     const liTwo = document.getElementById('liTwo');
     const liThree = document.getElementById('liThree');
     const liFour = document.getElementById('liFour');
     const liFive = document.getElementById('liFive');
     const liSix = document.getElementById('liSix');

    
  



function openNavBar() {
    ulList.style.display = 'flex';
    headSection.style.background = '#06100e'
    headSection.style.height =  "92vh";
    navImage.style.display = 'none';
    navAlpha.style.display = 'block';
    yrHeaderLogo.src = 'images/yrHeaderLogo.png';
    highlightContainer.style.display = 'none';
    about.style.display = 'none';
}


function closeNavBar(){
    ulList.style.display = 'none';
    headSection.style.background = 'none'
    navAlpha.style.display = 'none';
    navImage.style.display = 'block';
    yrHeaderLogo.src = 'images/yrLogoDark.png';
    highlightContainer.style.display = 'flex';
    about.style.display = 'flex';
}



const programsToggle = document.getElementById("programsToggle");
const programHealth =  document.getElementById("programHealth");
const hivPTCSPopUp = document.getElementById("hivPTCSPopUp");
const sexualReproductiveHealthPopUp = document.getElementById("sexualReproductiveHealthPopUp");
const gisPopUp = document.getElementById("gisPopUp");
const harmReductionPopUp = document.getElementById("harmReductionPopUp");
const referralsAndLinkagesnPopUp = document.getElementById("referralsAndLinkagesnPopUp");



function showHivPTCSPopUp(){
    programHealth.style.display = "none";
    hivPTCSPopUp.style.display = "block";
    headSection.style.display = "none";
}


function closeHivPTCSPopUp(){
    programHealth.style.display = "flex";
    hivPTCSPopUp.style.display = "none";
    headSection.style.display = "flex";
}



function showSexualReproductiveHealthPopUp(){
    programHealth.style.display = "none";
    sexualReproductiveHealthPopUp.style.display = "block";
    headSection.style.display = "none";
}


function closeSexualReproductiveHealthPopUp(){
    programHealth.style.display = "flex";
    sexualReproductiveHealthPopUp.style.display = "none";
    headSection.style.display = "flex";
}


function showGisPopUp(){
    programHealth.style.display = "none";
    gisPopUp.style.display = "block";
    headSection.style.display = "none";
}


function closeGisPopUp(){
    programHealth.style.display = "flex";
    gisPopUp.style.display = "none";
    headSection.style.display = "flex";
}



function showHarmReductionPopUp(){
    programHealth.style.display = "none";
    harmReductionPopUp.style.display = "block";
    headSection.style.display = "none";
}


function closeHarmReductionPopUp(){
    programHealth.style.display = "flex";
    harmReductionPopUp.style.display = "none";
    headSection.style.display = "flex";
}



function showReferralsAndLinkagesnPopUp(){
    programHealth.style.display = "none";
    referralsAndLinkagesnPopUp.style.display = "block";
    headSection.style.display = "none";
}


function closeReferralsAndLinkagesnPopUp(){
    programHealth.style.display = "flex";
    referralsAndLinkagesnPopUp.style.display = "none";
    headSection.style.display = "flex";
}


