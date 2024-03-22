const nameArray = [] //create list to store names
function addName(){
// get a trim version of name
const nameInput = document.getElementById('nameInput')
const name = document.getElementById('nameInput').Value.trim()
nameArray.push(name) 
displayName()
nameInput.value = ''
//check if null
}

function displayNames(){
    const nameList = document.getElementById('nameList')//get UL element
    nameList.innerHTML = ''//clears list

    for (let i = 0; i <nameArray.length; i++){
        const name = nameArray[i]
        
        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name
       
        li.appendChild(span)
        
        nameList.appendChild(li)


    }

}


document.getElementById('addNameBtn').addEventListener('click', addName)

