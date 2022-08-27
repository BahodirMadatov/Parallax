// header parallax start

const fantasy = document.querySelector('.fantasy'),
    clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat');
window.addEventListener('scroll', function(){
    fantasy.style.objectPosition = `0 ${window.scrollY / 10}%`;
    clouds.forEach(item => {
        const speed = item.getAttribute('data-speed');
        item.style.transform = `translateX(${window.scrollY * speed}px)`
    });
    boat.style.transform = `translateX(${window.scrollY * -0.5}px)`;
});

// header parallax end

// section layers start

const sectionBox = document.querySelector('.section__box'),
    layers = document.querySelectorAll('.layer');
sectionBox.addEventListener('mousemove', (e) => {
    layers.forEach(item => {
        const speed = item.getAttribute('data-speed');
        const x = e.clientX * speed / 100;
        const y = e.clientY * speed / 100;
        item.style.transform = `translate(${x}px, ${y}px)`;
    });
})

// section layers end

// count numbers start

const timer = document.querySelector('.timer'),
    timerNum = document.querySelectorAll('.timer__num');
function scrollCount(dur = 3000) {
    timerNum.forEach(item => {
        item.innerHTML = 0;
        const count = item.getAttribute('data-num');
        item.parentElement.classList.add('active');
        plus(0, item, count);
    });
    function plus(i, elem, num){
        if(i < num) {
            i++;
            elem.innerHTML = i;
            setTimeout(plus, dur/num, i, elem, num);
            // setTimeout(() => {
            //     plus(i, elem, num)
            // }, dur/num);
        }
    }
}


window.addEventListener('scroll', function onScroll(){
    if(window.scrollY > timer.offsetTop - window.innerHeight/2){
        scrollCount();
        window.removeEventListener('scroll', onScroll);
    }
})

// count numbers end

// to do list start

const form = document.querySelector('.box'),
    formInp = document.querySelector('.box__inp'),
    list = document.querySelector('.list');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('list__item');
    li.innerHTML = `${formInp.value} <button class="list__btn remove">X</button>`;
    list.append(li);
    this.reset();
});

function rmList(){
    const rm = document.querySelectorAll('.remove');
}
// to do list end