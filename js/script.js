const back2top = document.getElementById('back2top');

function scrollCheck() {
    if (window.scrollY > 100) {
        back2top.classList.remove('hidden');
    } else {
        back2top.classList.add('hidden');
    }
}

window.addEventListener('scroll', scrollCheck);

window.addEventListener('load', function() {
    document.getElementById('load').style.opacity = '0';
    this.setTimeout(() => {
        document.body.removeChild(load);
    },1000);

    scrollCheck();
    Init();
});

function Init() {
    const lenis = new Lenis();
    //lenis.on('scroll', console.log);
    requestAnimationFrame(function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 72,
        speed: 1000,
        speedAsDuration: true,
        easing: 'easeInOutQuart'
    });
}

function showNav() {
    const mobileNavbar = document.getElementById('mobile-navbar');
    if (mobileNavbar.classList.contains('visible')) {
        mobileNavbar.classList.remove('visible');
    } else {
        mobileNavbar.classList.add('visible');
    }
};

const logo = document.getElementById('logo');
let isAnimating = false;

logo.addEventListener('click', () => {
    if (isAnimating) return;
    
    if (logo.classList.contains('spin')) {
        logo.classList.remove('spin');
    } else {
        isAnimating = true;
        logo.classList.add('spin');
    }
});

logo.addEventListener('animationend', () => {
    isAnimating = false;
    logo.classList.remove('spin');
});

window.addEventListener('DOMContentLoaded', function() {
  if (window.scrollY > 50) {
    back2top.classList.add('show');
  }

});