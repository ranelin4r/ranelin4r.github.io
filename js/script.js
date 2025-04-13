window.addEventListener('load', function() {
    document.getElementById('load').style.opacity = '0';
    this.setTimeout(() => {
        document.body.removeChild(load);
    },1000);
    document.getElementById('main').style.transform = 'translateY(0)';
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
});

document.getElementById('nav').addEventListener('click', function showNav() {
    const mobileNavbar = document.getElementById('mobile-navbar');
    if (open) {
        mobileNavbar.classList.remove('hidden');
        mobileNavbar.classList.add('visible');
    } else {
        mobileNavbar.classList.remove('visible');
        mobileNavbar.classList.add('hidden');
    }
});