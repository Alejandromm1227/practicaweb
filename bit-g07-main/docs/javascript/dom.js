'use strict';
const d = document;
const $root = d.getElementById('root');
const $h1 = d.createElement('h1');
const $p = d.createElement('p');
const $btn = d.createElement('button');
const $span = d.createElement('span');
const $raiz = d.getElementById('raiz');

let contadorDeClicks = 0;

$h1.textContent = 'Manipulación del DOM';
$p.textContent = contadorDeClicks;
$btn.textContent = 'Click';
$span.textContent = '';

$root.style.backgroundColor = 'green';
$root.style.color = 'white';
$root.style.padding = '20px';

$raiz.style.backgroundColor = 'greenyellow';

$root.appendChild($h1);
$root.appendChild($p);
$root.appendChild($btn);
$root.appendChild($span);

$btn.addEventListener('click', () => {
  contadorDeClicks++;
  $p.textContent = contadorDeClicks;
  $span.textContent = ` El doble de clicks es: ${contadorDeClicks * 2}`;
  if (contadorDeClicks === 10) {
    //$raiz.style.display = 'none';
    $raiz.remove();
  }
});
