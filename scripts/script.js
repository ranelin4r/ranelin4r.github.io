function showHelp(){
    Swal.fire({
        title: "要确定吗？",
        text: "你将访问“七彩宝石ga”的BiliBili空间",
        //icon: "question",
        //color: "#716add",
        //imageUrl: "https://unsplash.it/400/200",
        //imageWidth: 400,
        //imageHeight: 200,
        //background: "#fff url(images/bg2.jpg)",
        showCancelButton: true,
        //confirmButtonColor: "#3085d6",
        //cancelButtonColor: "#d33",
        confirmButtonText: "是的（",
        cancelButtonText: "？不要",
        footer: `
            <span
                onclick="window.open('https://space.bilibili.com/651476589')"
            >
            访问该项目的续编写&优化者 @<u>FBWARKUP</u>
            </span>
            <style>
                span{
                    user-select: none;
                    cursor: pointer;
                    transition: color 120ms;
                }
                span:hover{
                    color: #000000;
                }
            </style>
        `,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `
        }
    }).then((result) => {
        if (result.isConfirmed) {
          window.open('https://space.bilibili.com/432156514');
        }
    })
}

function showError(){
    Swal.fire({
        title: "OUCH",
        text: "出现了一些问题，这是因为未开发的内容",
        icon: "error",
        //color: "#716add",
        //imageUrl: "https://unsplash.it/400/200",
        //imageWidth: 400,
        //imageHeight: 200,
        //background: "#fff url(images/bg2.jpg)",
        showCancelButton: true,
        //confirmButtonColor: "#3085d6",
        //cancelButtonColor: "#d33",
        confirmButtonText: "好的（",
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `
        }
    }).then((result) => {
        if (result.isConfirmed) {
          window.open('https://space.bilibili.com/432156514');
        }
    })
}

window.onload = () => {
    document.getElementById('loading').style.opacity = '0';
}

var switcher = document.getElementById('switcher')
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