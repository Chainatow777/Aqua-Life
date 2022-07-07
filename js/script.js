function onload() {
console.log('teu pão de queijo é meu :)');
    let text = document.getElementById('text');
    // let bird1 = document.getElementById('bird1');
    // let bird2 = document.getElementById('bird2');
    let btn = document.getElementById('btn');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;

        text.style.top = 35 + value * -0.1 + '%';
        // bird1.style.top = value * -1.5 + 'px';
        // bird1.style.left = value * 2 + 'px';
        // bird2.style.top = value * -1.5 + 'px';
        // bird2.style.left = value * -5 + 'px';

    })

    let home = document.getElementById('about');
   home.classList.add('aberto');
   setTimeout(() => { home.classList.remove('aberto');}, 2500);
}