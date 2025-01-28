//Initialization
const chatButton = document.getElementById("chat-btn")
const statusButton = document.getElementById("status-btn")
const callsButton = document.getElementById("calls-btn")

const chatPage = document.getElementById("chat-page")
const statusPage = document.getElementById("status-page")
const callsPage = document.getElementById("calls-page")


const messagePage = document.getElementById('message-page')
const navBar = document.getElementById('nav-bar')

const chatBox = document.querySelectorAll(".chat-box")

chatBox.forEach((chat)=>{
    chat.addEventListener('click',()=>{

        navBar.style.display = "none"
        chatPage.style.display="none"
        statusPage.style.display="none"
        callsPage.style.display="none"

        messagePage.style.display= "block"



    })
})


// Calling the function 

chatButton.onclick = ()=>{

    chatPage.style.display="block"
    statusPage.style.display="none"
    callsPage.style.display="none"

    chatButton.classList.add("border-line")
    statusButton.classList.remove("border-line")
    callsButton.classList.remove("border-line")
   
}

statusButton.onclick = ()=>{

    chatPage.style.display="none"
    statusPage.style.display="block"
    callsPage.style.display="none"
    
    chatButton.classList.remove("border-line")
    statusButton.classList.add("border-line")
    callsButton.classList.remove("border-line")

}
callsButton.onclick = ()=>{

    chatPage.style.display="none"
    statusPage.style.display="none"
    callsPage.style.display="block"

    chatButton.classList.remove("border-line")
    statusButton.classList.remove("border-line")
    callsButton.classList.add("border-line")

}