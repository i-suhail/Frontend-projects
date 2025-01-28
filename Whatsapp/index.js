//Initializing

const chatButton = document.getElementById("chat-btn")
const statusButton = document.getElementById("status-btn")
const callButton = document.getElementById("calls-btn")

const chatPage = document.getElementById("s-chat")
const statusPage = document.getElementById("s-status")
const callPage = document.getElementById("s-calls")
const msgPage = document.getElementById("s-msgs")
const navBar = document.getElementById('nav-bar')

const bkButton = document.querySelector(".m-left")
const chatBox = document.querySelectorAll(".chat-box")

//Calling Fun()

chatButton.onclick = () =>{
 
    chatPage.style.display="block"
    statusPage.style.display="none"
    callPage.style.display="none"

    chatButton.classList.add("border-line")
    statusButton.classList.remove("border-line")
    callButton.classList.remove("border-line")
}

statusButton.onclick = () =>{

    chatPage.style.display="none"
    statusPage.style.display="block"
    callPage.style.display="none"

    chatButton.classList.remove("border-line")
    statusButton.classList.add("border-line")
    callButton.classList.remove("border-line")
}

callButton.onclick = () =>{

    chatPage.style.display="none"
    statusPage.style.display="none"
    callPage.style.display="block"

    chatButton.classList.remove("border-line")
    statusButton.classList.remove("border-line")
    callButton.classList.add("border-line")
}

chatBox.forEach((chat) => {
  chat.addEventListener('click', ()=>{
    
    chatPage.style.display="none"
    statusPage.style.display="none"
    navBar.style.display="none"
    callPage.style.display="none"
    
    msgPage.style.display="block"

  })
})

bkButton.onclick = () =>{
 
  chatPage.style.display="block"
  navBar.style.display="block"
  statusPage.style.display="none"
  callPage.style.display="none"
  msgPage.style.display="none"

  chatButton.classList.add("border-line")
  statusButton.classList.remove("border-line")
  callButton.classList.remove("border-line")

}