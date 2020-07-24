//fetching marvel character
console.log('see if my app.js is linked')

const body = document.querySelector('body')

//fetch 

fetch('https://secure-hamlet-19722.herokuapp.com/api/v1/characters')

//then(response)
.then(response =>{
    console.log(response)
    return response.json()
})

//.the(data) to grab data 
.then(data =>{
    console.log(data)
   //getting data by  going into array and reference
   //key value using the index number and name  
    let ryuName = data[49].name
    console.log(ryuName)
    let ryuPicture = data[49].head_shot
    console.log(ryuPicture)
    let ryuMaker = data[49].universe
    console.log(ryuMaker)
  //making div class card and style with 20 rem
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.width = '20rem'
    console.log(card)
    
    // creating another img to pose on html with 
    //class specifying card-img-top to set up later
    const image = document.createElement('img')
    image.src = ryuPicture
    image.classList.add('card-img-top')
    // alt is usefull for grabbig it
    image.alt = ryuName
    console.log(image)
    
    //card body
    const cardBody = document.createElement('div')
    //adding class
    cardBody.classList.add('card-body')
    console.log(cardBody)
    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = ryuName
    console.log(cardTitle)
    //creating p tag for unvierse
    const cardUniverse = document.createElement('p')
    cardUniverse.textContent = ryuMaker
    //now to show and append child
    cardBody.appendChild(cardTitle)
    card.appendChild(image)
    card.appendChild(cardBody)
    body.appendChild(card)
    card.appendChild(cardUniverse)

  })

  // Constructor Forms 
  function BESTBoxer(name, titles, age){
  this.name = name 
  this.titles = titles 
  this.age = age
  this.intro = function(){
    console.log('The Greatest boxer of all time is ' + this.name)

  }
}

let mikeTyson = new BESTBoxer('Iron Mike Tison', 'former WBC, WBA and IBF world heavyweight champion ',  ' 54' )
let mannyPaciao = new BESTBoxer('Manny PacMan Pacquiao', 'only boxer in history to win 12 major world titles in eight different weight divisions', '40')
let muhammidAli = new BESTBoxer('Cassius Marcellus Clay Jr aka Muhammid Ali', 'Olympic gold medalist and the first fighter to capture the heavyweight title three times', '74')
console.log(mikeTyson)
console.log(mannyPaciao)
console.log(muhammidAli)


//class

// class Nintendo {
  // console.log('is this working' +Nintendo)
  //here is where setup your constructor what you pass in to your class
  //like a function
  //constrcutor part info we put in
  // constructor(year, name, genre){
  //     this.year = year
  //     this.name = name
  //     this.genre = genre
  
  
  // }
  // intro()
// }

  


let nesGame = new Nintendo('1987', 'Mega Man', 'Action Side Scroller')
// console.log(nesGame)
nesGame.drive()
nesGame.intro()