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