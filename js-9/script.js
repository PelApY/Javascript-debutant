const btn = document.querySelector('#validButton');
const resultDiv = document.querySelector('#result');

btn.addEventListener('click', (event) => {
    //Catcher les erreurs possibles pour afficher l'erreur dans resultDiv
    try {
        const num1 = validateNumber(document.querySelector('#num1').value);
        const num2 = validateNumber(document.querySelector('#num2').value);
        const operator = validateOperator(document.querySelector('#operator').value, num2);
        const result = calculate(num1, num2, operator);
        resultDiv.textContent = result;
    } catch (error) {
        resultDiv.textContent = error.message;
    }
});

function validateNumber(num) {
    //Vérifier que num est bien un nombre, sinon lancer une erreur 
    num = parseFloat(num);
    if (isNaN(num)) {
        throw new Error('Les deux paramètres d\'entrée doivent être des nombres.');
    }
    return num;
}

function validateOperator(operator, num2) {
    //Si l'opérateur est /, vérifier que num2 n'est pas 0, sinon lancer une erreur
    if (operator === '/' && num2 === 0) {
        throw new Error('Impossible de diviser par zéro.');
    }
    //Vérifier que l'opérateur est bien + - * / sinon lancer une erreur
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return operator;
        default:
            throw new Error('Opération invalide.');
    }
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}