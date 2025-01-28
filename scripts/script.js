document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    // const main = document.querySelector('main')
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show');
        // main.classList.toggle('darken');
    })
}