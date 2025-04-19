window.addEventListener('load', function() {
    document.getElementById('load').style.opacity = '0';
    this.setTimeout(() => {
        document.body.removeChild(load);
    },1000);

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
        mobileNavbar.classList.remove('hidden');
        mobileNavbar.classList.add('visible');
    } else {
        mobileNavbar.classList.remove('visible');
        mobileNavbar.classList.add('hidden');
    }
};
