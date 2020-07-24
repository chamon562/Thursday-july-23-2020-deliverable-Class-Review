const resultDiv = document.querySelector('#results')
console.log(resultDiv);


new URLSearchParams(window.location.search).forEach((value, name) =>{
    console.log(name)
    console.log(value)
    

let resultElement = document.createElement('p')
resultElement.textContent = name + ' ' +  value

resultDiv.appendChild(resultElement)

})

//Promis

let isCatHappy = true;

let willIGetNewCat = new Promise(
    function (resolve, reject) {
        if (isCatHappy) {
            let Cat = {
                breed: 'calico',
                color: 'multi colored'
            };
            resolve(Cat); // fulfilled
            //if false we purposely created error and this goes through
        } else {
            // let reason = new Error('Cat is not happy');
            reject('Cat ant happy'); // reject
        }

    }
);





// async/awaits

async function printInsta(){
    let endpoint = 'https://www.facebook.com/splatterhouse'
    let CendPoint = 'https://www.facebook.com/chamon562'
    let splatterHouse = await fetch(endpoint).then(response =>response.json())
    console.log(splatterHouse)
    let channee = fetch(CendPoint).then(response => response.json())
    console.log(channee)
}
printInsta()




