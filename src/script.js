const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}
var largeimage=document.getElementById("largeimage")
var smallimage=document.getElementsByClassName("small-image")
smallimage[0].onclick=function() {
largeimage.src=smallimage[0].src;
}
var largeimage=document.getElementById("largeimage")
var smallimage=document.getElementsByClassName("small-image")
smallimage[1].onclick=function() {
largeimage.src=smallimage[1].src;
}
var largeimage=document.getElementById("largeimage")
var smallimage=document.getElementsByClassName("small-image")
smallimage[2].onclick=function() {
largeimage.src=smallimage[2].src;
}

