function checkPassphrase() {
    const passphrase = document.getElementById('passphrase').value;
    const message = document.getElementById('message');

    if (passphrase === '玩美中彰投') {
        window.open('https://changchuting.github.io/Kimi/', '_blank');
        message.textContent = '';
    } else {
        message.textContent = '密語錯誤，請重新輸入！';
    }
}