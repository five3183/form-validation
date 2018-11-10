// UI elements
const name = document.getElementById('name')
const zip = document.getElementById('zip')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const submitBtn = document.getElementById('submit-btn')

// Function takes in REGEX and the element.  
const testContent = (re, element) => {
   try {
      if(!re.test(element.value)) {
         element.classList.add('is-invalid')
         submitBtn.disabled = true
      } else {
         element.classList.remove('is-invalid')
         submitBtn.removeAttribute('disabled')
         disableSubmit()
      }
   } catch (error) {
      console.log(error)
   }
}

const validateName = () => {
   // const re = /^[a-z A-Z]{2,10}$/
   const re = /^\w{2,10}$/
   try {
      testContent(re, name)
   } catch (error) {
      console.log(error)
   }
}

const validateZip = () => {
   // const re = /^[0-9]{5}(-[0-9]{4})?$/
   const re = /^\d{5}(-[\d]{4})?$/
   try {
      testContent(re, zip)
   } catch (error) {
      console.log(error)
   }
}

const validateEmail = () => {
   // const re = /^([a-z A-Z 0-9_\-\.]+)@([a-z A-Z 0-9_\-\.]+)\.([a-z A-Z]{2,5})$/
   const re = /^([\w\-\.]+)@([\w\-\.]+)\.([\w]{2,5})$/
   try {
      testContent(re, email)
   } catch (error) {
      console.log(error)
   }
}

const validatePhone = () => {
   const re = /^\(?\d{3}\)?[.-\s]?\d{3}[.-\s]?\d{4}$/
   try {
      testContent(re, phone)
   } catch (error) {
      console.log(error)
   }
}

// Get field values from the form
const getFieldValues = () => {
   const uiElementsValue = [name.value, zip.value, email.value, phone.value]
   return uiElementsValue
}

// Check to see all fields meet requirements, if not disable submit button.
const disableSubmit = () => {
   const uiValues = getFieldValues()
   uiValues.forEach(element => {
      if(element === "") {
         submitBtn.disabled = true
      } else {
         submitBtn.removeAttribute('disabled')
      }
   });
}


// Add event listners to call functions
name.addEventListener('keyup', validateName)
zip.addEventListener('keyup', validateZip)
email.addEventListener('keyup', validateEmail)
phone.addEventListener('keyup', validatePhone)

submitBtn.addEventListener('click', e => {
   e.preventDefault()
   console.log(`${name.value} ${zip.value} ${email.value} ${phone.value}`)
})
