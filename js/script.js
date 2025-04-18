window.addEventListener('load', function() {
    document.getElementById('load').style.opacity = '0';
    this.setTimeout(() => {
        document.body.removeChild(load);
    },1000);
<<<<<<< HEAD

    lenisInit();
});

function lenisInit() {
    const lenis = new Lenis();
    //lenis.on('scroll', console.log);
    requestAnimationFrame(function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    });
}

function showNav() {
    const mobileNavbar = document.getElementById('mobile-navbar');
    if (mobileNavbar.classList.contains('hidden')) {
=======
    document.getElementById('main').style.transform = 'translateY(0)';
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
});

document.getElementById('nav').addEventListener('click', function showNav() {
    const mobileNavbar = document.getElementById('mobile-navbar');
    if (open) {
>>>>>>> a2a31d6a85e027d2e40c49d7969e584abc501dc1
        mobileNavbar.classList.remove('hidden');
        mobileNavbar.classList.add('visible');
    } else {
        mobileNavbar.classList.remove('visible');
        mobileNavbar.classList.add('hidden');
    }
<<<<<<< HEAD
};
=======
});
>>>>>>> a2a31d6a85e027d2e40c49d7969e584abc501dc1
