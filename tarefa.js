const form = document.getElementById('form-numero');
const numerocampoA = document.getElementById('numero-campoA');
let formEValido = false;

function validaNumero(numerocampoB) {
    const numeroComoArray = numerocampoB.split (' ');
    return numeroComoArray.length > numerocampoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault():

    const numerocampoB = document.getElementById('numero-campoB');
    const mensagemSucesso = 'O número do campo B: <b>${numerocampoB.value}</b> > é maior que o número do campo A: <b>${numerocampoA.value}</b>';


    formEValido = validaNumero(numeroB.value)
    if (formEValido); {
        const containerMensagemsucesso = document.querySelector('.success-message');
        containerMensagemsucesso.innerHTML = mensagemSucesso;
        containerMensagemsucesso.style.display = 'block';

        numerocampoB.value = '';
        numerocampoA.value = '';

    } else {
        numerocampoA.style.border = ' 1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numerocampoA.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (!formEValido); {
        numerocampoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numerocampoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
