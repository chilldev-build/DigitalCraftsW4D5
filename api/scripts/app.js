const clickMe = document.getElementById('button');
const message = document.getElementById('message');

clickMe.addEventListener('click', function(){
    const newMessage = "This is a new message";
    message.innerHTML = newMessage;
})