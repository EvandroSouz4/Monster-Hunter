const images = document.querySelectorAll('#slide-area img')
const btnNextImg = document.querySelector('#btnNext')
const btnPrevImg = document.querySelector('#btnPrev')
const loadElements = document.querySelectorAll('#load-area span')

let index = 0
let interval;
function slide(){
        interval = setInterval( () => {
        images[index].classList.remove('active-img')
        loadElements[index].classList.remove('active-load')
        index = (index + 1) % images.length
        if(index == -1){
            index = images.length
        }
        images[index].classList.add('active-img')
        loadElements[index].classList.add('active-load')
    }, 5000)
}

function nextImg(){
        clearInterval(interval)
        images[index].classList.remove('active-img')
        loadElements[index].classList.remove('active-load')
        index = (index + 1) % images.length
        images[index].classList.add('active-img')
        loadElements[index].classList.add('active-load')
        slide()
}

function prevImg(){
        clearInterval(interval)
        images[index].classList.remove('active-img')
        loadElements[index].classList.remove('active-load')
        if(index == 0){
            index = images.length
        }
        index = (index - 1) % images.length
        images[index].classList.add('active-img')
        loadElements[index].classList.add('active-load')
        slide()
}

btnNextImg.addEventListener('click', nextImg)
btnPrevImg.addEventListener('click', prevImg)

window.addEventListener('load', slide)