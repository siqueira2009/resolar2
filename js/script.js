let menu = document.getElementById("menu-opt");
let navMob = document.getElementById("navMob");
let menuAberto = false;

function abrirMenu() {
    if (!menuAberto) {
        navMob.style.display = "flex";
        navMob.style.opacity = "0";
        navMob.style.transition = "opacity 0.2s";
        void navMob.offsetWidth;
        navMob.style.opacity = "1";
        let altura = navMob.offsetHeight + "px";
        menu.style.height = altura;
        menu.style.paddingBottom = "15px";
        menu.style.transition = "height 0.3s";
    } else {
        menu.style.height = "0px";
        navMob.style.opacity = "0";
        menu.style.transition = "height 0.3s";
        navMob.style.transition = "opacity 0.2s";
        setTimeout(() => {
            navMob.style.display = "none";
        }, 100);
        setTimeout(() => {
            menu.style.padding = "0px";
        }, 100);
    }

    menuAberto = !menuAberto;
}

// ------------------------------------------------
let btnReciclar = document.getElementById('reciclarBtn');
let reciclarIcon = document.getElementById('reciclarIcon');

function girarIcon() {
    reciclarIcon.style.rotate = '360deg';
    reciclarIcon.style.transition = 'rotate 1s';
}

function desgirarIcon() {
    reciclarIcon.style.rotate = '0deg';
    reciclarIcon.style.transition = 'rotate 1s';
}