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
        menu.style.height = "60px";
        menu.style.transition = "height 0.3s";
    } else {
        menu.style.height = "0px";
        navMob.style.opacity = "0";
        menu.style.transition = "height 0.3s";
        navMob.style.transition = "opacity 0.2s";
        setTimeout(() => {
            navMob.style.display = "none";
        }, 200);
    }

    menuAberto = !menuAberto;
}