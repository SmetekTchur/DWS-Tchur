document.getElementById("moro").addEventListener("click", function() {
alert("NENÁVIDÍM JAVASCRIPT");
});


function changeText() {
const button = document.getElementById('btssss');
button.innerText = 'Text se změnil!';
}

const button = document.getElementById('busy') ;
const text = document.getElementById('auto');
button.addEventListener('click',() => {
text.textContent = 'Smutné že';
})

function addText() {
const container = document.getElementById('hub');
container.innerHTML = '<p>Nenávídím JavaScript</p>';
}

document.getElementById('pozdravit').onclick = function() {
const meno = document.getElementById('meno').value;
alert('Ahoj '+ meno);
};

const textElement = document.getElementById('hoverText');

textElement.addEventListener('mouseover', function() {
textElement.innerText = 'Dík za najetí';
});
textElement.addEventListener('mouseout', function() {
textElement.innerText = 'Najeď sem';

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
