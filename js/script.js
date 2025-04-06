window.onload = () => {
    document.getElementById('loading').style.opacity = '0';
    setTimeout(()=>{
        document.body.removeChild(loading);
    },1000);
}

var switcher = document.getElementById('switcher');
var body = document.querySelector('body');

switcher.onclick = () => {
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
        document.getElementById('light').style.display = 'block';
        document.getElementById('dark').style.display = 'none';
        switcher.title = '切换暗色';
    } else {
        body.classList.add('dark');
        document.getElementById('light').style.display = 'none';
        document.getElementById('dark').style.display = 'block';
        switcher.title = '切换亮色';
    }
}