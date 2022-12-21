const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passGen = document.querySelector('#genButton')
let passOne = document.querySelector('.password-one')
let passTwo = document.querySelector('.password-two')

genButton.addEventListener('click', function() {
      passOne.textContent = ''
      passTwo.textContent = ''
      passOne.textContent = generateRandomPassword()
      passTwo.textContent = generateRandomPassword()
      
})

let passwordLimit = 15
function generateRandomPassword() {
    let myNewPassword = ''
    for (let i = 0; i < passwordLimit; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        myNewPassword += characters[randomNumber]
    }
    return myNewPassword
}


// function genPassword() {
//     for (let i = 0; i < characters.length; i++) {
//         let randomPassword = Math.floor( Math.random() * characters.length)
//         return randomPassword
//     }
// }



