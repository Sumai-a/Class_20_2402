let nav = document.querySelector('#nav');


window.addEventListener('scroll', function(){
    let test = this.document.documentElement.scrollTop;

    if(test> 100){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
})


//dark mode
let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let body = document.querySelector('body');

dark.addEventListener('click', function(){
    body.classList.add('mode');
    if(body.classList.contains('mode')){
        dark.style.marginTop = '-100%';
    }
    // body.classList.contains('mode');
});

light.addEventListener('click', function(){
    body.classList.remove('mode');
    if(!body.classList.contains('mode')){
        dark.style.marginTop = '0%';
    }
});

let cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', function(e){

    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';


    // console.log("")
})