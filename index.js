// template_n9a8rpn
// service_fr8ahyn
// YTrBCbqIhXbLuMGQI

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
