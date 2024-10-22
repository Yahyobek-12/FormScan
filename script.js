const myForm = document.querySelector('form')
let nameInp = document.getElementById('name')
let lastInp = document.getElementById('last')
let emailInp = document.getElementById('email')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let isRequired = true

    if (nameInp.value.trim() === '') {
        nameInp.classList.add('active')
        nameInp.placeholder = 'Please fill out this field'
        isRequired = false
    }

    if (lastInp.value.trim() === '') {
        lastInp.classList.add('active')
        lastInp.placeholder = 'Please fill out this field'
        isRequired = false
    }

    if (emailInp.value.trim() === '') {
        emailInp.classList.add('active')
        emailInp.placeholder = 'Please fill out this field'
        isRequired = false
    }

    if (isRequired) {
        nameInp.classList.remove('active')
        lastInp.classList.remove('active')
        emailInp.classList.remove('active')

        nameInp.placeholder = ''
        lastInp.placeholder = ''
        emailInp.placeholder = ''

        alert('Form submited successfuly')
        console.log('Form submited successfuly')
    }

    e.target.reset()
})