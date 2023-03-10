const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const lettersOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
const genButton = document.getElementById("generate-button") 
let checkboxEl = document.getElementById("checkbox")
let numPickerEl = document.getElementById("number-picker")

genButton.addEventListener("click", createRipple)

function generatePasswords() {
    
    let passwordOne = ""
    let passwordTwo = ""
    for(let i=0; i<numPickerEl.value; i++) {
    passwordOne += randomCharacter()
    passwordTwo += randomCharacter()
    }

    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo

    let button1 = document.createElement("button")
    button1.innerHTML = "Copy to clipboard"
    let div1 = document.getElementById("div1")
    div1.appendChild(button1)
    button1.classList.add("copy-button")
    button1.setAttribute("onclick", "copy('password-one', this)")
    button1.addEventListener('mouseout', function() {
        button1.innerHTML = "Copy to clipboard"
    })


    let button2 = document.createElement("button")
    button2.innerHTML = "Copy to clipboard"
    let div2 = document.getElementById("div2")
    div2.appendChild(button2)
    button2.classList.add("copy-button")
    button2.setAttribute("onclick", "copy('password-two', this)")
    button2.addEventListener('mouseout', function() {
        button2.innerHTML = "Copy to clipboard"
    })
    
}

function randomCharacter() {
    if(checkboxEl.checked) {
        return characters[Math.floor(Math.random() * characters.length)]
    } else return lettersOnly[Math.floor(Math.random() * lettersOnly.length)]
    
}

function createRipple(event) {
    const button = event.currentTarget
    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");
    
    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
    ripple.remove();
    }
    
    button.appendChild(circle);
}

function copy(element, button) {
    let text = document.getElementById(element).innerHTML;
    const copyContent = async () => {
        try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
        } catch (err) {
        console.error('Failed to copy: ', err);
        }
    }
  copyContent()
  console.log(button)
  button.textContent = "Copied!"
}