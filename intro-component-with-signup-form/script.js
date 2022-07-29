console.log('script.js loads')

const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

console.log(firstName)

form.addEventListener('submit', (e) => {
  if (firstName.value === '' || firstName.value === null) {
    e.preventDefault()
    let parentAttribute = firstName.parentElement.getAttribute('class')
    parentAttribute += ' error'
    firstName.parentElement.setAttribute('class', parentAttribute)
    firstName.setAttribute('value', 'NAN')
  }
  if (lastName.value === '' || lastName.value === null) {
    e.preventDefault()
    let parentAttribute = lastName.parentElement.getAttribute('class')
    parentAttribute += ' error'
    lastName.parentElement.setAttribute('class', parentAttribute)
  }

  if (password.value === '' || password.value === null) {
    e.preventDefault()
    let parentAttribute = password.parentElement.getAttribute('class')
    parentAttribute += ' error'
    password.parentElement.setAttribute('class', parentAttribute)
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  if (validateEmail) {
    e.preventDefault()
    let parentAttribute = email.parentElement.getAttribute('class')
    parentAttribute += ' error'
    email.parentElement.setAttribute('class', parentAttribute)
  }
  // if (!email.value.contains('@') || !email.value.contains('.')) {
  //   e.preventDefault()
  //   let parentAttribute = email.parentElement.getAttribute('class')
  //   parentAttribute += ' error'
  //   email.parentElement.setAttribute('class', parentAttribute)
  // }
})





// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (firstName.value === '' || firstName.value === null) {
//     messages.push('Name is required')
//   }
  
//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })

// document.querySelectorAll('.input-container[data-error] input').forEach(inpEl => {
//   inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'))
// })