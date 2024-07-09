document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var bmi = calculateBMI(weight, height);
    displayResult(bmi);
});

function calculateBMI(weight, height) {
    return weight / ((height / 100) * (height / 100));
}

function displayResult(bmi) {
    var resultDiv = document.getElementById('result');
    var category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    resultDiv.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>' +
                          'Category: ' + category;
}
