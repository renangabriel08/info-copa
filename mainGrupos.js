function player1(team, name) {
  return `
  <li>
      <img src="./assets/icon-${team}.svg" alt="Bandeira do ${team}" />
      <strong>${name}</strong>
  </li>
  `
}

function player2(team, name) {
  return`
  <li>
      <img src="./assets/icon-${team}.svg" alt="Bandeira do ${team}" />
      <strong>${name}</strong>
  </li>
  `
}

function player3(team, name) {
  return`
  <li>
      <img src="./assets/icon-${team}.svg" alt="Bandeira do ${team}" />
      <strong>${name}</strong>
  </li>
  `
}

function player4(team, name) {
  return`
  <li>
      <img src="./assets/icon-${team}.svg" alt="Bandeira do ${team}" />
      <strong>${name}</strong>
  </li>
  `
}

function creatGrup(letra, p1, p2, p3, p4) {
  return `
  <div class="card">
      <h2>GRUPO ${letra}</h2>
    <ul>
      ${p1}
      ${p2}
      ${p3}
      ${p4}
    </ul>
  </div>
  `
}

document.querySelector('#app').innerHTML = `
  <header>  
    <img src="./assets/taça.png" alt="logo" width="250px">
  </header>

  <main id="cards">

    ${creatGrup('A', player1('qatar', 'Catar'), player2('ecuador', 'Equador'), player3('senegal', 'Senegal'), player4('netherlands', 'Holanda'))}
    ${creatGrup('B', player1('england', 'Inglaterra'), player2('iran', 'Irã'), player3('united-states', 'Estados Unidos'), player4('wales', 'País de Gales'))}
    ${creatGrup('C', player1('argentina', 'Argentina'), player2('saudi-arabia', 'Arábia Saudita'), player3('mexico', 'México'), player4('poland', 'Polônia'))}
    ${creatGrup('D', player1('france', 'França'), player2('australia', 'Austrália'), player3('denmark', 'Dinamarca'), player4('tunisia', 'Tunísia'))}
    ${creatGrup('E', player1('spain', 'Espanha'), player2('costa-rica', 'Costa Rica'), player3('germany', 'Alemanha'), player4('japan', 'Japão'))}
    ${creatGrup('F', player1('belguin', 'Bélgica'), player2('canada', 'Canadá'), player3('marocco', 'Marrocos'), player4('croatia', 'Croácia'))}
    ${creatGrup('G', player1('brazil', 'Brasil'), player2('serbia', 'Sérvia'), player3('switzerland', 'Suíça'), player4('cameroon', 'Camarões'))}
    ${creatGrup('H', player1('portugal', 'Portugal'), player2('ghana', 'Gana'), player3('uruguay', 'Uruguai'), player4('south-korea', 'Coreia do Sul'))}

  </main>
`