function creatGame(palyer1, hour, player2) {
  return`
  <li>
      <img src="./assets/icon-${palyer1}.svg" alt="Bandeira do ${palyer1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}

let delay = -0.5;
function creatCalendario(info) {
  delay = delay + 0.5
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${info}</h2>
    <ul>
      <a href="./calendario.html">
      <img src="./assets/calendario.png" alt="">
      </a>
    </ul>
  </div>
  `
}

function creatGrupos(info) {
  delay = delay + 0.5
  return `
  <div class="card">
      <h2>${info}</h2>
    <ul>
      <a href="./grupos.html">
      <img id="calendario" src="./assets/grupos.png" alt="">
      </a>
    </ul>
  </div>
  `
}

function creatEstadios(info) {
  delay = delay + 0.5
  return `
  <div class="card">
      <h2>${info}</h2>
    <ul>
      <a href="./estadios.html">
      <img id="estadios" src="./estadios/logoEstadio.png" alt="">
      </a>
    </ul>
  </div>
  `
}

document.querySelector('#app').innerHTML = `
  <header> 
    <img src="./assets/taça.png" alt="logo" width="250px">
  </header>

  <main id="cards">

    ${creatCalendario('Calendário')}

    ${creatGrupos('Grupos')}

    ${creatEstadios('Estádios')}

  </main>
`