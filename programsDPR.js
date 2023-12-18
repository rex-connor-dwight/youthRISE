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
const drugPolicyReform =  document.getElementById("drugPolicyReform");
const policyAdvocacyPopUp = document.getElementById("policyAdvocacyPopUp");
const CSOsStakeholdersEngagementPopUp = document.getElementById("CSOsStakeholdersEngagementPopUp");



function showCSOsStakeholdersEngagementPopUp(){
    drugPolicyReform.style.display = "none";
    CSOsStakeholdersEngagementPopUp.style.display = "block";
    headSection.style.display = "none";
}


function closeCSOsStakeholdersEngagementPopUp(){
    drugPolicyReform.style.display = "flex";
    CSOsStakeholdersEngagementPopUp.style.display = "none";
    headSection.style.display = "flex";
}


function showPolicyAdvocacyPopUp(){
    drugPolicyReform.style.display = "none";
    policyAdvocacyPopUp.style.display = "block";
    headSection.style.display = "none";
}


function closePolicyAdvocacyPopUp(){
    drugPolicyReform.style.display = "flex";
    policyAdvocacyPopUp.style.display = "none";
    headSection.style.display = "flex";
}