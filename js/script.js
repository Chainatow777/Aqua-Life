function onload() {
console.log('teu pão de queijo é meu :)');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;

        text.style.top = 35 + value * -0.1 + '%';

    })

    let home = document.getElementById('home');
   home.classList.add('aberto');
   setTimeout(() => { home.classList.remove('aberto');}, 2500);
}

function likeButton (){
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');
    if (heart.scroll.match("../image/heart.png")){
        heart.src = "../image/heart_red.png";
        likes.innerHTML = "1,285 likes";
    }
    else {
        heart.src = "../image/heart.png"
        likes.innerHTML = "1,283 likes";
    }
}