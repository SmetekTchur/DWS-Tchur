document.getElementById("moro").addEventListener("click", function() {
alert("NENÁVIDÍM JAVASCRIPT");
});


function changeText() {
document.getElementById('btssss').innerText = 'Text se změnil!';
}

document.getElementById('busy').addEventListener('click',() => {
document.getElementById('auto').textContent = 'Smutné že';
})

function addText() {
document.getElementById('hub').innerHTML = '<p>Nenávídím JavaScript</p>';
}

document.getElementById('pozdravit').onclick = function() {
const meno = document.getElementById('meno').value;
alert('Ahoj '+ meno);
};

textElement = document.getElementById('hoverText').addEventListener('mouseover', function() {
textElement = document.getElementById('hoverText').innerText = 'Dík za najetí';
});
textElement = document.getElementById('hoverText').addEventListener('mouseout', function() {
textElement = document.getElementById('hoverText').innerText = 'Najeď sem';

});

function zobrazCas() {
var aktualniCas = new Date();
var hodiny = aktualniCas.getHours();
var minuty = aktualniCas.getMinutes();
var sekundy = aktualniCas.getSeconds();

if (hodiny < 10) hodiny = '0' + hodiny;
if (minuty < 10) minuty = '0' + minuty;
if (sekundy < 10) sekundy = '0' + sekundy;
var cas = hodiny + ':' + minuty + ':' + sekundy;
document.getElementById("cas").innerText = "Teď právě je: " + cas;
}

function zobrazDatum() {
var aktualniDatum = new Date();
var den = aktualniDatum.getDate();
var mesic = aktualniDatum.getMonth() + 1;
var rok = aktualniDatum.getFullYear();

if (den < 10) den = '0' + den;
if (mesic < 10) mesic = '0' + mesic;
var datum = den + '.' + mesic + '.' + rok;
document.getElementById("datum").innerText = "Co je za datum: " + datum;
}
function addThree() {
document.getElementById("výsledek").innerText = parseFloat(document.getElementById("čísloinput").value) + 3;
}

function addNumbers() {
result = parseFloat(document.getElementById("prvníčíslo").value) + parseFloat(document.getElementById("druhéčíslo").value);
document.getElementById("Výsledek").innerText = + result;
}


function PridejTask(){
result1 = document.getElementById("slovoinput").value;
document.getElementById("Vysledek2").innerHTML += "<p id="+result1+">"+ result1 + "<button onclick=smazat('"+result1+"')>Smaž</button></p>";
}

function smazat(id){
document.getElementById(id).remove();
}


