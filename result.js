const resultDiv = document.querySelector('#results')
console.log(resultDiv);


new URLSearchParams(window.location.search).forEach((value, name) =>{
    console.log(name)
    console.log(value)
    

let resultElement = document.createElement('p')
resultElement.textContent = name + ' ' +  value

resultDiv.appendChild(resultElement)

})


//class

class Nintendo {
    //here is where setup your constructor what you pass in to your class
    //like a function
    //constrcutor part info we put in
    constructor(year, name, genre ){
        this.year = year
        this.name = name
        this.genre = genre
    
    
    }
    intro()
   
}
    


let nesGame = new Nintendo('1987', 'Mega Man', 'Action Side Scroller')
// console.log(nesGame)
nesGame.drive()
nesGame.intro()


