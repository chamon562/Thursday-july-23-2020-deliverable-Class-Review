const resultDiv = document.querySelector('#results')
console.log(resultDiv);


new URLSearchParams(window.location.search).forEach((value, name) =>{
    console.log(name)
    console.log(value)
    

let resultElement = document.createElement('p')
resultElement.textContent = name + ' ' +  value

resultDiv.appendChild(resultElement)

})
