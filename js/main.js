document.querySelector('.mobile-menu').addEventListener ('click', () => {
    document.querySelector('.header-menu').classList.toggle('show')
    document.querySelector('body').classList.toggle('lock')
})
    document.querySelectorAll('.header-menu a').forEach((el) => {
        el.addEventListener('click', () => {
        document.querySelector('.header-menu').classList.remove('show')
    })
})
