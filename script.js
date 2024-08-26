document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encryptText(inputText);
    document.getElementById('output-text').textContent = encryptedText;
    document.getElementById('copy-btn').style.display = 'block';
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decryptText(inputText);
    document.getElementById('output-text').textContent = decryptedText;
    document.getElementById('copy-btn').style.display = 'block';
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado al portapapeles');
    });
});

function encryptText(text) {
    let map = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, m => map[m]);
}

function decryptText(text) {
    let map = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/enter|imes|ai|ober|ufat/g, m => map[m]);
}
