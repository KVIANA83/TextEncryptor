function criptografar() {
    const mensagem = document.getElementById('mensagem').value;
    const chave = "minha-chave-secreta"; // Mantenha a chave secreta segura
    const mensagemCriptografada = CryptoJS.AES.encrypt(mensagem, chave).toString();
    
    document.getElementById('mensagem_criptografada').innerText = mensagemCriptografada;
    document.getElementById('mensagem_descriptografada').innerText = ""; // Limpa a mensagem descriptografada
}

function descriptografar() {
    const mensagemCriptografada = document.getElementById('mensagem_criptografada').innerText;
    const chave = "minha-chave-secreta"; // Mantenha a chave secreta segura
    const bytes = CryptoJS.AES.decrypt(mensagemCriptografada, chave);
    const mensagemDescriptografada = bytes.toString(CryptoJS.enc.Utf8);
    
    document.getElementById('mensagem_descriptografada').innerText = mensagemDescriptografada;
}
