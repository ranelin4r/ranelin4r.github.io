var message = [
    '吃一堑吃一堑，还是吃到了这东西不是吗...',
    'Oops. 你好像什么都没找到 :/',
    '我想它们只是消失了伯爵先生😨',
    '404酱！你干了什么！！！o(≧口≦)o',
    '哈基404你这家伙......',
    '“不要担心，孩子，你不会迷路的...”',
    '这页面应该是被隔壁老王吃掉了吧？（',
    '竹篮打水一场空，却落得两行泪连绵，共情啊😭',
];

document.getElementById('oops').innerText = message[Math.floor(Math.random() * message.length)];