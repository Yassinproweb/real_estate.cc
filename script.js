const menuBtn = document.querySelector('.menu_btn')
const menuOpen = document.querySelector('.menu_open')
const menuClose = document.querySelector('.menu_close')
const navMenu = document.querySelector('.nav_menu')

menuBtn.addEventListener('click', ()=> {
    menuOpen.classList.toggle('hidden')
    menuClose.classList.toggle('hidden')
    navMenu.classList.toggle('flex')
    navMenu.classList.toggle('hidden')
})

/* Like Pricing Option */
const heart = document.querySelectorAll('#heart')
const heart_btn = document.querySelectorAll('#heart1')

heart[0].addEventListener('click', ()=> {
    heart[0].classList.toggle('hidden')
    heart_btn[0].classList.toggle('hidden')
})
heart_btn[0].addEventListener('click', ()=> {
    heart[0].classList.toggle('hidden')
    heart_btn[0].classList.toggle('hidden')
})

heart[1].addEventListener('click', ()=> {
    heart[1].classList.toggle('hidden')
    heart_btn[1].classList.toggle('hidden')
})
heart_btn[1].addEventListener('click', ()=> {
    heart[1].classList.toggle('hidden')
    heart_btn[1].classList.toggle('hidden')
})

heart[2].addEventListener('click', ()=> {
    heart[2].classList.toggle('hidden')
    heart_btn[2].classList.toggle('hidden')
})
heart_btn[2].addEventListener('click', ()=> {
    heart[2].classList.toggle('hidden')
    heart_btn[2].classList.toggle('hidden')
})

heart[3].addEventListener('click', ()=> {
    heart[3].classList.toggle('hidden')
    heart_btn[3].classList.toggle('hidden')
})
heart_btn[3].addEventListener('click', ()=> {
    heart[3].classList.toggle('hidden')
    heart_btn[3].classList.toggle('hidden')
})

heart[4].addEventListener('click', ()=> {
    heart[4].classList.toggle('hidden')
    heart_btn[4].classList.toggle('hidden')
})
heart_btn[4].addEventListener('click', ()=> {
    heart[4].classList.toggle('hidden')
    heart_btn[4].classList.toggle('hidden')
})

heart[5].addEventListener('click', ()=> {
    heart[5].classList.toggle('hidden')
    heart_btn[5].classList.toggle('hidden')
})
heart_btn[5].addEventListener('click', ()=> {
    heart[5].classList.toggle('hidden')
    heart_btn[5].classList.toggle('hidden')
})

heart[6].addEventListener('click', ()=> {
    heart[6].classList.toggle('hidden')
    heart_btn[6].classList.toggle('hidden')
})
heart_btn[6].addEventListener('click', ()=> {
    heart[6].classList.toggle('hidden')
    heart_btn[6].classList.toggle('hidden')
})

heart[7].addEventListener('click', ()=> {
    heart[7].classList.toggle('hidden')
    heart_btn[7].classList.toggle('hidden')
})
heart_btn[7].addEventListener('click', ()=> {
    heart[7].classList.toggle('hidden')
    heart_btn[7].classList.toggle('hidden')
})

/* Button FAQs PRESS */
const button_price = document.querySelectorAll('#minmax')
const min_max = document.querySelectorAll('#min_max')
const max_min = document.querySelectorAll('#max_min')
const text_faq = document.querySelectorAll('#text')

button_price[0].addEventListener('click', ()=> {
    min_max[0].classList.toggle('hidden')
    max_min[0].classList.toggle('hidden')
    text_faq[0].classList.toggle('hidden')
})
button_price[1].addEventListener('click', ()=> {
    min_max[1].classList.toggle('hidden')
    max_min[1].classList.toggle('hidden')
    text_faq[1].classList.toggle('hidden')
})
button_price[2].addEventListener('click', ()=> {
    min_max[2].classList.toggle('hidden')
    max_min[2].classList.toggle('hidden')
    text_faq[2].classList.toggle('hidden')
})
button_price[3].addEventListener('click', ()=> {
    min_max[3].classList.toggle('hidden')
    max_min[3].classList.toggle('hidden')
    text_faq[3].classList.toggle('hidden')
})