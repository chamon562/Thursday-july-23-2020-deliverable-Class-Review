# Thursday-july-23-2020-deliverable-Class-Review
This is my class review of  concepts we've gone over class

- fetch
- HTML FORMS
- Constructor Functions
- Class
- Promises
- async/away

## Fetch

``` java script

## Code Snippet

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
}

```
1. I shared the above code snippet above for fetch because its the part that I have to start with in order to get my data. making sure i grab the body to impliment by using document.querySelector fetch the api link .then(response) then .then(data) to access the data. 


## HTML FORMS

``` Html

<div>
        <h2>Favorite Game Genre</h2>
       <label for="fighting game">Fighting Game</label>
       <input type="checkbox" name="fighting game" id="fighting game">
       <label for="first person shooter">First person shooter</label>
       <input type="checkbox" name="first person shooter" id="first person shooter">
       <label for="MOBA">Massive Online Battle Arena</label>
       <input type="checkbox" name="MOBA" id="MOBA">
       <label for="action rpg">Action RPG</label>
       <input type="checkbox" name="action rpg" id="action rpg">
       <label for="MMORPG">Massive Multiplayer Online RPG </label>
       <input type="checkbox" name="MMORPG" id="MMORPG">
       <label for="sports">Sports</label>
       <input type="checkbox" name="sports" id="sports">
    </div>


```
1. My favorite part of doing the HTML from is the code above that shows mainly how to implement a check box thats optional for people to check if they like certain genres of video games. I can see how this is used to store a users data of interest, thats why surveyes are important. If a company better understands their user, the better they can surve them to their liking.

## Constructor Functions

``` javascript

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

```

1. Constructor Functions similar to functions is some type of action did something and return some type of value.function template with info in it and we gon put info it. The constructor function name is also in all capitalized and changes to a different color, can take multiple peramiters and inside use array of objects with key value pairs. shows what the different things you can take from it in the console.


## Class

```javascript

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

```

1. Class from what Ive been putting in is alot similar to the cunstructor function. only difference is instead of using function in the beginning it says class. Inside of the class is also an array objects with key value pairs. Made a variable outside and equal new and class name fulfilling the three perameters.


## Promises

```javascript

et isDadHappy = true;

let willIGetNewCat = new Promise(
    function (resolve, reject) {
        if (isCatHappy) {
            let Cat = {
                breed: 'calico',
                color: 'multi colored'
            };
            resolve(Cat); // fulfilled
            
        } else {
            // let reason = new Error('Cat is not happy');
            reject('Daddy ant happy'); // reject
        }

    }
);


```
1. Promises is similar to If statements and we careted our own error to alert other egineers whos looking at our code. the promise has a resolve if the boolean is true if not its rejected with a message saying "Daddy ant happy"


## async/awaits

```javascript

sync function printInsta(){
    let endpoint = 'https://www.facebook.com/splatterhouse'
    let CendPoint = 'https://www.facebook.com/chamon562'
    let splatterHouse = await fetch(endpoint).then(response =>response.json())
    console.log(splatterHouse)
    let channee = fetch(CendPoint).then(response => response.json())
    console.log(channee)
}
printInsta()

```

1. From what I can remember with async awaits is that if I have two functions, they will will be ran at the same time and if I want them to run one after another in sequence I would have to use async awaits. async goes first and shoots off that function then awaits shoots of the other.