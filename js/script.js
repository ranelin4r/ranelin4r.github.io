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
        switcher.title = '切换暗色';
    } else {
        switcher.title = '切换亮色';
    }
}