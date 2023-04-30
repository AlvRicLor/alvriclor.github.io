function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese valores válidos para los dos números.');
        return;
    }

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('No es posible dividir por 0');
                return;
            }
            resultado = num1 / num2;
            break;
    }

    document.getElementById('resultado').innerText = resultado.toFixed(2);
}
