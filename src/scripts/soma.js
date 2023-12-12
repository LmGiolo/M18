function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    var sum = num1 + num2;

    document.getElementById('result').innerHTML = 'Resultado: ' + sum;
}
