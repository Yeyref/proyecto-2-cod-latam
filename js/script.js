const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

bdark.addEventListener('click', function() {
    body.classList.toggle('darkmode');
    
});


const lista = document.getElementById('menu');
const elementos = lista.getElementsByTagName('li');

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('click', function() {
    
    for (let j = 0; j < elementos.length; j++) {
      elementos[j].classList.remove('activo');
    }
    this.classList.add('activo');
  });
}


