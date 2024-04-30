'use strict';
const baseGithub = 'https://github.com/';
const equipo = [
  {
    nombre: 'ALVAREZ CUESTA NICOLAS',
    github: '',
    retirado: true,
  },
  {
    nombre: 'ARIZA CALDERON JUAN MANUEL',
    github: 'JuanArz2',
    retirado: false,
  },
  {
    nombre: 'BARBOSA GONZALEZ ERICK FABIAN',
    github: 'erickbg08',
    retirado: false,
  },
  {
    nombre: 'BONILLA ZARATE GIOVANNI ANDRES',
    github: 'Gioko95',
    retirado: false,
  },
  {
    nombre: 'BULLA MARULANDA JOHN HENRY',
    github: '',
    retirado: true,
  },
  {
    nombre: 'CERON SUAREZ ANGELA DANIELA',
    github: '',
    retirado: false,
  },
  {
    nombre: 'CHAVES BARBOSA INGRID PAOLA',
    github: 'paochaves',
    retirado: false,
  },
  {
    nombre: 'ESCOBAR ALFONSO PABLO ANDRÉS',
    github: '',
    retirado: true,
  },
  {
    nombre: 'ESQUIVIA PEREZ DEISSY ESTHER',
    github: 'deissy03',
    retirado: false,
  },
  {
    nombre: 'GAMBOA MOLANO MARIA FERNANDA',
    github: 'Mafegam',
    retirado: false,
  },
  {
    nombre: 'GONZÁLEZ CRISTANCHO ERIKA LORENA',
    github: 'Erikaloren',
    retirado: false,
  },
  {
    nombre: 'HERNANDEZ BOLAÑOS KEVIN STEVEN',
    github: 'KevinsitoHB',
    retirado: false,
  },
  {
    nombre: 'JASSAN MONTERO YAMID ABBAD',
    github: 'Izzyyz',
    retirado: false,
  },
  {
    nombre: 'LÓPEZ PAMPLONA LINA MARÍA',
    github: 'Marialostudio',
    retirado: false,
  },
  {
    nombre: 'MARTINEZ TORRES FABIAN LEONARDO',
    github: '',
    retirado: true,
  },
  {
    nombre: 'MEDINA SALAZAR JULIAN DAVID',
    github: 'Julimedina23',
    retirado: false,
  },
  {
    nombre: 'MENDEZ MELO YEISON ALEJANDRO',
    github: 'Alejandromm1227',
    retirado: false,
  },
  {
    nombre: 'MENESES SUÁREZ JUAN DAVID',
    github: 'juanmeneses0310',
    retirado: false,
  },
  {
    nombre: 'MORA MAYORGA JAIRO SANTIAGO',
    github: 'SantiagoMora1',
    retirado: false,
  },
  {
    nombre: 'MUÑOZ HOYOS ELIAS JOSÉ',
    github: 'stardatcom',
    retirado: false,
  },
  {
    nombre: 'NIÑO BLANCO DAVID SANTIAGO',
    github: 'mitogetagamer',
    retirado: false,
  },
  {
    nombre: 'ORTIZ ESCOBAR JUAN SEBASTIAN',
    github: '2sebass5',
    retirado: false,
  },
  {
    nombre: 'PARRA HERNANDEZ LIBIA LORENA',
    github: 'lorena1103',
    retirado: false,
  },
  {
    nombre: 'PEÑARANDA DÍAZ JUAN NICOLAS',
    github: 'NicolasPenaranda',
    retirado: false,
  },
  {
    nombre: 'RANGEL PEÑA ANDRES FELIPE',
    github: 'andrespeco0987',
    retirado: false,
  },
  {
    nombre: 'RESTREPO PUENTES NAOMY ISABELL',
    github: 'Naomy97',
    retirado: false,
  },
  {
    nombre: 'SANCHEZ IBÁÑEZ JOSE ALBEIRO',
    github: 'asanchez8801',
    retirado: false,
  },
  {
    nombre: 'SIERRA MORENO DAVID ANDREY',
    github: 'DavidSierra19',
    retirado: false,
  },
  {
    nombre: 'TORRES ARRIETA JAVIER JOSE',
    github: 'Endless-Continue',
    retirado: false,
  },
  {
    nombre: 'TORRES PRIETO NICOLAS',
    github: 'Nicolast18',
    retirado: false,
  },
  {
    nombre: 'TORRES RODRIGUEZ VICTOR ALDEMAR',
    github: 'Aldemar8322',
    retirado: false,
  },
  {
    nombre: 'VANEGAS BUCURU CRISTHIAN FRANCISCO',
    github: 'Cris02Vanegas',
    retirado: false,
  },
  {
    nombre: 'VEGA LOZANO HECTOR JAVIER',
    github: 'Hectorvegaloza',
    retirado: false,
  },
  {
    nombre: 'ZERPA BUSTOS LUIS JOSE',
    github: 'luiszerpa-code',
    retirado: false,
  },
];

const $root = document.getElementById('root');

let contenidoHtml = '';

for (let i = 0; i < equipo.length; i++) {
  const estudiante = equipo[i];
  if (estudiante.retirado) {
    contenidoHtml += `
<figure>
  <img src="./img/sad.png" alt="Imagen estudiante retirado">
  <figcaption>${estudiante.nombre}</figcaption>
</figure>
    `;
  } else {
    contenidoHtml += `
<a href="${baseGithub}${estudiante.github}" target="_blank" rel="noopener noreferrer">
  <figure>
    <img src="${baseGithub}${estudiante.github}.png" alt="Avatar de ${estudiante.nombre}">
    <figcaption>${estudiante.nombre}</figcaption>
  </figure>
</a>
`;
  }
}

$root.innerHTML = contenidoHtml;
