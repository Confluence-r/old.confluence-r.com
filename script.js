$(window).load(function() {      //Do the code in the {}s when the window has loaded 
  $("#loader").fadeOut("fast");  //Fade out the #loader div
});

//Our Team Hover Animation

const akshay = document.getElementById('akshay');
const dhruvin = document.getElementById('dhruvin');
const niyati = document.getElementById("niyati");
const meghna = document.getElementById("meghna");

function niyatiUpdate(niyati) {
niyati.setAttribute('src', '../assests/about/niyati_front.png');
meghna.src = "../assests/about/meghna_right.png";
akshay.src = "../assests/about/akshay_up.png";
dhruvin.src = "../assests/about/dhruvin_up.png";
}

function meghnaUpdate(meghna) {
meghna.setAttribute('src', '../assests/about/meghna_front.png');
niyati.src = "../assests/about/niyati_left.png";
akshay.src = "../assests/about/akshay_up.png";
dhruvin.src = "../assests/about/dhruvin_up.png";
}

function dhruvinUpdate(dhruvin) {
dhruvin.setAttribute('src', '../assests/about/dhruvin_front.png');
akshay.src = "../assests/about/akshay_left.png";
meghna.src = "../assests/about/mehgna_down.png";
niyati.src = "../assests/about/niyati_down.png";
}

function akshayUpdate(akshay) {
akshay.setAttribute('src', '../assests/about/akshay_front.png');
dhruvin.src = "../assests/about/dhruvin_right.png";
meghna.src = "../assests/about/mehgna_down.png";
niyati.src = "../assests/about/niyati_down.png";
}

//Client Popup

function Popup1() {
  var div = document.getElementById("Popup1");
  div.style.display="block";
}

function Popup2() {
  var div = document.getElementById("Popup2");
  div.style.display="block";
}

function Popup3() {
  var div = document.getElementById("Popup3");
  div.style.display="block";
}

function Popup4() {
  var div = document.getElementById("Popup4");
  div.style.display="block";
}

function Popup5() {
  var div = document.getElementById("Popup5");
  div.style.display="block";
}


function Close() {
  document.getElementById("Popup1").style.display="none";
  document.getElementById("Popup2").style.display="none";
  document.getElementById("Popup3").style.display="none";
  
  document.getElementById("Popup5").style.display="none";
  document.getElementById("Popup6").style.display="none";
  document.getElementById("Popup7").style.display="none";
  document.getElementById("Popup8").style.display="none";
}


document.getElementById("show-more1").addEventListener("click", Popup1);
document.getElementById("show-more2").addEventListener("click", Popup2);
document.getElementById("show-more3").addEventListener("click", Popup3);
document.getElementById("show-more5").addEventListener("click", Popup5);