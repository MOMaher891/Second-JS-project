const prgress = document.querySelector('.progress')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const circle = document.querySelectorAll('.circle')


let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circle.length) {
        currentActive = circle.length
    }
    update()

})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()

})

function update() {
    circle.forEach((circles, index) => {
        if (index < currentActive) {
            circles.classList.add('active');
        } else {
            circles.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active')

    prgress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%';

    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circle.length) {
        next.disabled = true;
    } else {
        next.disabled = false
        prev.disabled = false
    }
}
