const btn = document.querySelector('#submitBtn')

btn.addEventListener('click', function(){
    event.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const number = document.querySelector('#number').value
    const textarea = document.querySelector('#textarea').value

    console.table(name, email, number, textarea)
})