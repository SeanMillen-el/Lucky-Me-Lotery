const nameArray = [] //create list to store names
function addName(){
// get a trim version of name
const nameInput = document.getElementById('nameInput')
const name = document.getElementById('nameInput').Value.trim()
nameArray.push(name) 
displayName()
nameInput.value = ''
}

document.getElementById('addNameBtn').addEventListener('click', addName)

