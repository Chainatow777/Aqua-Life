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