const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
const boton = document.getElementsByTagName('button')[0];

let modoOscuro = false;

bdark.addEventListener('click', function () {
  modoOscuro = !modoOscuro;

  if (modoOscuro) {
    body.classList.add('darkmode');
    boton.textContent = 'Modo Claro';
  } else {
    body.classList.remove('darkmode');
    boton.textContent = 'Modo Oscuro';
  }
});

const lista = document.getElementById('menu');
const elementos = lista.getElementsByTagName('li');

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('click', function () {

    for (let j = 0; j < elementos.length; j++) {
      elementos[j].classList.remove('activo');
    }
    this.classList.add('activo');
  });
}


document.querySelector('.navbar-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
});



