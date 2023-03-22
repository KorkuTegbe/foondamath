let socket;

const chatMessages = document.querySelector('.chat-messages')
const form = document.querySelector('form')


const createChatMessage = (event, msg, sender) => {
    const messageSection = document.createElement('div')
    messageSection.className = 'message-section'
    const message = document.createElement('div')
    message.className = 'message'
    if(sender == 'foondabot'){
        message.classList.add('bot')
    }else{
        message.classList.add('user')
    }
    message.innerHTML = `<p class="meta">${sender}</span></p>
    <p class="text">${msg}</p>`
    messageSection.appendChild(message)
    chatMessages.appendChild(messageSection)

    chatMessages.scrollTo(0, chatMessages.scrollHeight)
}


window.addEventListener('load', () => {
    localStorage.clear()
    const name = prompt('Enter your name: ');
    socket = io();

    socket.emit('join', { event: 'join', data: {name} })
    socket.on('join', (event) => {
        createChatMessage(event, event.message, 'foondabot')
    })

    socket.on('input_equation', (event) => {
        createChatMessage(event, event.message, 'foondabot')
    })

    socket.on('solution', (event) => {
        createChatMessage(event, event.message, 'foondabot')
    })


    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        let equation = e.target.elements.equation.value
    
        if(!equation) return false

        const data = {
            eventName: 'input_equation',
            equation: equation
        }

        createChatMessage(data.eventName, data.equation, name)

        socket.emit('input_equation', data)

        e.target.elements.equation.value = ''
        e.target.elements.equation.focus()
    
    })

})
