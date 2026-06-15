const inputName = prompt("Digite o nome do usuário: ");
const USER_NAME = inputName ? inputName : 'Visitante';
const userDisplay = document.querySelector('.user');
if(userDisplay) userDisplay.textContent = `Usuário: ${USER_NAME}`;

const reqInput = document.querySelector('.text-input');
const btnEnviar = document.querySelector('.request-bnt');
const responseH1 = document.querySelector('.protocol-response');

reqInput.addEventListener('input', ()=> {
    if(reqInput.value.length > 0){
        btnEnviar.classList.add('active');
    } else{
        btnEnviar.classList.remove('active');
    }
});

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    const rawValue = reqInput.value.trim();
    const value = rawValue.toLowerCase();

    if(value === "") return;

    let protocolo = "";

    if(value.includes('@')){
        protocolo = "SMTP/POP";
    }
})

const reqBtn = document.querySelector('.request-btn')
reqBtn.addEventListener('click', function(event) {
    event.preventDefault()
    const protocolName = document.querySelector('.protocol-name')
  const reqText = document.querySelector('.text-input')
  const requestText = reqText.value
 
  if(requestText.includes('@')) {
    protocolName.textContent = 'SMTP/POP'
  } else if (requestText.includes('www')) {
    protocolName.textContent = 'HTTP/HTTPS'
  } else {
    protocolName.textContent = 'WEBSOCKET'
  }
  reqText.value = ''
})


const inputFile = document.querySelector('#arquivo')
inputFile.addEventListener('change', () => {
    if (inputFile.files.length > 0) {
        const file = inputFile.files [0]
        alert(file.name)
    }
})

inputFile.addEventListener('cancel', () => {
  alert('Cancelado')
})