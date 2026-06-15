
const CHAVE_CRIPTOGRAFIA = 3;

function criptografarCesar(texto, deslocamento) {

    return texto.split("").map(caractere => {

        const codigo =
            caractere.charCodeAt(0);

        if (codigo >= 65 && codigo <= 90) {

            return String.fromCharCode(
                ((codigo - 65 + deslocamento) % 26)
                + 65
            );

        }

        if (codigo >= 97 && codigo <= 122) {

            return String.fromCharCode(
                ((codigo - 97 + deslocamento) % 26)
                + 97
            );

        }

        // Números
        if (codigo >= 48 && codigo <= 57) {

            return String.fromCharCode(
                ((codigo - 48 + deslocamento) % 10)
                + 48
            );

        }

        // Mantém caracteres especiais
        return caractere;

    }).join("");

}



function camadaApresentacao(dadosLimpos) {

    const dadosCriptografados = {

        remetente:
            criptografarCesar(
                dadosLimpos.remetente,
                CHAVE_CRIPTOGRAFIA
            ),

        destinatario:
            criptografarCesar(
                dadosLimpos.destinatario,
                CHAVE_CRIPTOGRAFIA
            ),

        assunto:
            dadosLimpos.assunto,

        corpo:
            criptografarCesar(
                dadosLimpos.corpo,
                CHAVE_CRIPTOGRAFIA
            ),

        protocolo:
            dadosLimpos.protocolo

    };


    console.log(
        "Camada de Apresentação → Dados criptografados:",
        dadosCriptografados
    );


    alert(
        `Mensagem SMTP Processada!\n\n` +
        `=== DADOS FORAM CRIPTOGRAFADOS ===\n\n` +
        `De: ${dadosCriptografados.remetente}\n` +
        `Para: ${dadosCriptografados.destinatario}\n` +
        `Assunto: ${dadosCriptografados.assunto}\n` +
        `Corpo: ${dadosCriptografados.corpo}`
    );


    // Simulação da próxima camada
    proximaCamadaOSI(dadosCriptografados);

}



function proximaCamadaOSI(dados) {

    console.log(
        "Próxima camada OSI recebeu:",
        dados
    );

}