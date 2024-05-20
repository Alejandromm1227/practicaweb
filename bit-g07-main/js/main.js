'use strict';
const baseGithub = 'https://github.com/';
const equipo = [
  {
    nombre: 'ALVAREZ CUESTA NICOLAS',
    github: '',
    retirado: true,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'ARIZA CALDERON JUAN MANUEL',
    github: 'JuanArz2',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'BARBOSA GONZALEZ ERICK FABIAN',
    github: 'erickbg08',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'BONILLA ZARATE GIOVANNI ANDRES',
    github: 'Gioko95',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'BULLA MARULANDA JOHN HENRY',
    github: '',
    retirado: true,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'CERON SUAREZ ANGELA DANIELA',
    github: '',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'CHAVES BARBOSA INGRID PAOLA',
    github: 'paochaves',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'ESCOBAR ALFONSO PABLO ANDRÉS',
    github: '',
    retirado: true,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'ESQUIVIA PEREZ DEISSY ESTHER',
    github: 'deissy03',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'GAMBOA MOLANO MARIA FERNANDA',
    github: 'Mafegam',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'GONZÁLEZ CRISTANCHO ERIKA LORENA',
    github: 'Erikaloren',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'HERNANDEZ BOLAÑOS KEVIN STEVEN',
    github: 'KevinsitoHB',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'JASSAN MONTERO YAMID ABBAD',
    github: 'Izzyyz',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'LÓPEZ PAMPLONA LINA MARÍA',
    github: 'Marialostudio',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'MARTINEZ TORRES FABIAN LEONARDO',
    github: '',
    retirado: true,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'MEDINA SALAZAR JULIAN DAVID',
    github: 'Julimedina23',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'MENDEZ MELO YEISON ALEJANDRO',
    github: 'Alejandromm1227',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'MENESES SUÁREZ JUAN DAVID',
    github: 'juanmeneses0310',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'MORA MAYORGA JAIRO SANTIAGO',
    github: 'SantiagoMora1',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'MUÑOZ HOYOS ELIAS JOSÉ',
    github: 'stardatcom',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'NIÑO BLANCO DAVID SANTIAGO',
    github: 'mitogetagamer',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'ORTIZ ESCOBAR JUAN SEBASTIAN',
    github: '2sebass5',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'PARRA HERNANDEZ LIBIA LORENA',
    github: 'lorena1103',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'PEÑARANDA DÍAZ JUAN NICOLAS',
    github: 'NicolasPenaranda',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'RANGEL PEÑA ANDRES FELIPE',
    github: 'andrespeco0987',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'RESTREPO PUENTES NAOMY ISABELL',
    github: 'Naomy97',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'SANCHEZ IBÁÑEZ JOSE ALBEIRO',
    github: 'asanchez8801',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'SIERRA MORENO DAVID ANDREY',
    github: 'DavidSierra19',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'TORRES ARRIETA JAVIER JOSE',
    github: 'Endless-Continue',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'TORRES PRIETO NICOLAS',
    github: 'Nicolast18',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'TORRES RODRIGUEZ VICTOR ALDEMAR',
    github: 'Aldemar8322',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'VANEGAS BUCURU CRISTHIAN FRANCISCO',
    github: 'Cris02Vanegas',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'VEGA LOZANO HECTOR JAVIER',
    github: 'Hectorvegaloza',
    retirado: false,
    calificaciones: [0, 0 ,0]
  },
  {
    nombre: 'ZERPA BUSTOS LUIS JOSE',
    github: 'luiszerpa-code',
    retirado: false,
    calificaciones: [0, 0 ,0]
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
    <figcaption><span>${estudiante.nombre}</span><br><span>${estudiante.calificaciones[0]}</span></figcaption>
  </figure>
</a>
`;
  }
}

$root.innerHTML = contenidoHtml;
