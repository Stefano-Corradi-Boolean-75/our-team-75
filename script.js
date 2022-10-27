const team = [
  {
    name:'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    qualities: [
      'team-leader',
      'organizzato'
    ]
  },
  {
    name:'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    qualities: [
      'simpatica',
      'attiva'
    ]
  },
  {
    name:'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    qualities: [
      'creativo',
      'attivo',
      'organizzato'
    ]
  },
  {
    name:'Angela Lopez',
    role: 'Social Media Manager	',
    image: 'angela-lopez-social-media-manager.jpg',
    qualities: [
      'creativa'
    ]
  },
  {
    name:'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    qualities: [
      'efficiente',
      'organizzato',
      'instancabile'
    ]
  },
  {
    name:'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    qualities: [
      'efficiente',
      'creativa'
    ]
  },
];

const teamContainer = document.querySelector('.team-container');
const addButton = document.querySelector('#addMemberButton');
addButton.addEventListener('click', addNewMember);


drawTeam();

function drawTeam(){
  // resetto il teamContainer
  teamContainer.innerHTML = '';

  team.forEach( (teamMember) => drawTeamMember(teamMember) );

}

function drawTeamMember(teamMember){
  /*
    1 leggo il contentuto del container
    2 prendo le informazioni dal teamMeber
    3 genero l'ouput HTML
    4 lo aggiungo all'HTML presente
  */

  // 1
  let prevContent = teamContainer.innerHTML;

  // 2
  // destrutturo l'oggetto in arrivo dalla proprietà delle funzione
  const {name, role, image, qualities} = teamMember;
  /*
  è come fare: 
  const name = teamMember.name;
  const role = teamMember.role;
  const image = teamMember.image;
  const qualities = teamMember.qualities;*/

  // 3
  prevContent += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${image}"
        alt="${name}"
      />
    </div>
    <div class="card-text">
      <h3>${name}</h3>
      <p>${role}</p>
      <h4>Qualità</h4>
      <p>${qualities.join(' - ')}</p>
    </div>
  </div>
  `;

  // 4
  teamContainer.innerHTML = prevContent;
}

function addNewMember(){

  /*
    1 leggo il valore degli input
    2 creo un object con tutti i valori
    3 invio il nuovo oggetto a drawTeamMember
    4 aggiungo l'elemnto alla base dati
    5 resetto il form
  */

  // 1
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const image = document.getElementById('image').value;
  const qualities = document.getElementById('qualities').value;

  // splitto in un nuovo array la stringa qualities in base alla virgolo
  const arrNewQualities = qualities.split(',');
  console.log(arrNewQualities)
  // creo un nuovo array ripulendo dagli spazi vuoti
  const cleanNewQualities = arrNewQualities.map( quality => quality.trim())
  console.log(cleanNewQualities)

  // 2
  const newTeamMember = {
    name,
    role,
    image,
    qualities
  }

  console.log(newTeamMember);

  // 3
  drawTeamMember(newTeamMember);

  // 4
  team.push(newTeamMember);

  // 5
  resetForm()

  //console.log(team)
  
}

function resetForm(){
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
  document.getElementById('qualities').value = '';
}

