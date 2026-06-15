
const inputName = prompt("Digite o nome do usuário:");
const USER_NAME = inputName ? inputName : "Visitante";

const userDisplay = document.querySelector(".user");

if (userDisplay) {
    userDisplay.textContent = `Usuário: ${USER_NAME}`;
}

const reqInput = document.querySelector(".text-input");
const btnEnviar = document.querySelector(".request-btn");
const responseH1 = document.querySelector(".protocol-response");
const emailForm = document.querySelector(".email-form");


reqInput.addEventListener("input", () => {

    if (reqInput.value.length > 0) {
        btnEnviar.classList.add("active");
    } else {
        btnEnviar.classList.remove("active");
    }

});


btnEnviar.addEventListener("click", (event) => {

    event.preventDefault();

    const rawValue = reqInput.value.trim();
    const value = rawValue.toLowerCase();

    if (value === "") return;

    let protocolo = "";

    if (value.includes("@")) {

        protocolo = "SMTP/POP";

        if (emailForm) {
            emailForm.classList.remove("hidden");
        }

    } else {

        if (emailForm) {
            emailForm.classList.add("hidden");
        }

        if (
            value.startsWith("ws://") ||
            value.startsWith("wss://")
        ) {

            protocolo = "WEBSOCKET";

        }

        else if (
            value.startsWith("http") ||
            value.includes("www") ||
            value.includes(".com") ||
            value.includes(".br")
        ) {

            protocolo = "HTTP/HTTPS";

        }

        else {

            protocolo =
                "Protocolo não identificado";

        }

    }

    responseH1.textContent = protocolo;

    reqInput.value = "";
    btnEnviar.classList.remove("active");

});



if (emailForm) {

    emailForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const dadosEmail = {

            remetente:
                document.querySelector("#remetente")
                    .value,

            destinatario:
                document.querySelector("#destinatario")
                    .value,

            assunto:
                document.querySelector("#assunto")
                    .value,

            corpo:
                document.querySelector("#corpo")
                    .value,

            protocolo:
                document.querySelector("#protocolo")
                    .value

        };

        console.log(
            "Camada de Aplicação → Dados limpos:",
            dadosEmail
        );

        camadaApresentacao(dadosEmail);

        responseH1.textContent =
            "Dados enviados para camada de apresentação";

        emailForm.reset();

        document.querySelector("#protocolo")
            .value = "SMTP";

        emailForm.classList.add("hidden");

    });

}

const inputFile =
    document.querySelector("#arquivo");

inputFile.addEventListener("change", () => {

    if (inputFile.files.length > 0) {

        const file =
            inputFile.files[0];

        alert(file.name);

    }

});