function creatGame(palyer1, hour, player2) {
  return`
  <li>
      <img src="./assets/icon-${palyer1}.svg" alt="Bandeira do ${palyer1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}

function estadio1(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

function estadio2(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

function estadio3(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

function estadio4(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

function estadio5(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

function estadio6(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

function estadio7(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

function estadio8(nome) {
  return `
  <div class="card">
      <h2>${nome}</h2>
    <ul>
      <img src="./estadios/${nome}.png" alt="">
    </ul>
  </div>
  `
}

document.querySelector('#app').innerHTML = `
  <header>
    <img src="./assets/taça.png" alt="logo" width="250px">
  </header>

  <main id="cards">

    ${estadio1('974')}

    ${estadio2('Ahmad Bin Ali')}

    ${estadio3('Al Bayt')}

    ${estadio4('Al Janoub')}

    ${estadio5('Al Thumama')}

    ${estadio6('Education City')}

    ${estadio7('Khalifa International')}

    ${estadio8('Lusail')}

  </main>
`