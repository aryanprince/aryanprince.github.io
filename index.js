// template_n9a8rpn
// service_fr8ahyn
// YTrBCbqIhXbLuMGQI

let isModalOpen = false

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm('service_fr8ahyn', 'template_n9a8rpn', event.target, 'YTrBCbqIhXbLuMGQI')
        .then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        })
        .catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert('The email service is temporarily unavilable, please contact me directly on hey@aryanprince.com')
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true
    document.body.classList += ' modal--open'
}

let contrastToggle = false
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle == true) {
        document.body.classList += ' dark-theme'
    } else {
        document.body.classList.remove('dark-theme')
    }
}
