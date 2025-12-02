function changeTheme() {
    // check = document.getElementById('changeTheme');
    // input = document.getElementById('changeThemeInput');
    // label = document.getElementById('changeThemeLabel');
    titulo = document.getElementById('titulo');
    textos = document.querySelectorAll("h1, h4, h5, h6");
    imagen = document.getElementById('imagen');
    video = document.getElementById('video');
    botones = document.querySelectorAll("button");
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        // label.innerText = '';
        // input.checked = true;
        textos.forEach(el => {
            el.classList.add("glow-text");
        });
        botones.forEach(el => {
            el.classList.remove("btn-outline-dark");
            el.classList.add("btn-outline-light");
        });
        video.style = "width:100%;height:auto;display:block;";
        imagen.style = "display:none;";
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        // label.innerText = '';
        // input.checked = false;
        //titulo.innerText = 'Santiago Camps';
        textos.forEach(el => {
            el.classList.remove("glow-text");
        });
        botones.forEach(el => {
            el.classList.remove("btn-outline-light");
            el.classList.add("btn-outline-dark");
        });
        video.style = "display:none;";
        imagen.style = "width:100%;height:auto;display:block;";
    }
    // input.blur();

}


const text = document.getElementById('titulo');
function doGlitch() {

    text.innerText = 'S̷a̷n̷t̵i̸a̴g̶o̵ ̶C̷a̶m̵p̵s̴';

    text.style.transform = `translate(${rand(3, 11)}px, 0px)`;
    text.style.fontWeight = 'bold';
    //   text.style.letterSpacing = rand(2,5) + 'px';
    //   text.style.opacity = '0.8';

    // Reset after a short burst
    setTimeout(() => {
        text.innerText = 'Santiago Camps';
        text.style.transform = '';
        text.style.fontWeight = 'bold';
        // text.style.letterSpacing = '';
        // text.style.opacity = '';
    }, 100);
}
function rand(min, max) {
    return Math.random() * (max - min) + min;
}
function schedule() {
    setTimeout(() => {
        doGlitch();
        schedule();
    }, Math.random() * 7000 + 7000);
}
schedule();

// setTimeout(() => {
//   document.getElementById('btn1').click();
// }, 1500);
// setTimeout(() => {
//   document.getElementById('btn2').click();
// }, 3500);


function hoverThenClick(selector) {
    const btn = document.querySelector(selector);

    setTimeout(() => {
        btn.classList.add('active');
        setTimeout(() => {
            btn.click();
            setTimeout(() => {
                btn.classList.remove('active');
            }, 300);
        }, 200);
    }, 100);
};
setTimeout(() => {
    hoverThenClick('#btn1');
}, 1000);
setTimeout(() => {
    hoverThenClick('#btn2');
}, 2500);