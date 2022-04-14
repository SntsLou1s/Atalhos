function pontilhado(texto) {
    let resposta = "";
    for(var x = 0; x < texto.length; x ++) {
        if(texto[x] != " ") {
            resposta += texto[x] + ".";
        }
        else {
            resposta += " "
        }
    }
    return resposta;
}

const botao = document.querySelector("#enviar")
botao.addEventListener("click",
    function(e) {
        e.preventDefault();
        const elemento = document.querySelector("#texto");
        const texto = pontilhado(elemento.value);
        try {
            navigator.clipboard.writeText(texto);
            console.log("Sucesso!\n" + texto);
        }
        catch {
            console.log("Erro...");
        }
    }
);