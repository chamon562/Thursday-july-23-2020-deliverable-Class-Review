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