
const chatMessages = document.querySelector('.chat-messages')
const form = document.querySelector('form')


const createChatMessage = (event, msg, sender) => {
    const messageSection = document.createElement('div')
    messageSection.className = 'message-section'
    const message = document.createElement('div')
    message.className = 'message'
    if(sender == 'bot'){
        message.classList.add('bot')
    }else{
        message.classList.add('user')
    }
    message.innerHTML = `<p class="meta">${sender} <span>${msg.time}</span></p>
    <p class="text">${msg}</p>`
    messageSection.appendChild(message)
    chatMessages.appendChild(messageSection)

    chatMessages.scrollTo(0, chatMessages.scrollHeight)
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let msg = e.target.elements.msg.value

    if(!msg) return false

    createChatMessage('some-event', msg, 'bot')

    e.target.elements.msg.value = ''
    e.target.elements.msg.focus()

})