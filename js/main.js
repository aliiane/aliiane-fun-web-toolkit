document.addEventListener('DOMContentLoaded', () => {
    showSection('home');

    document.getElementById('textManipulationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        handleTextManipulation();
    });

    document.getElementById('calculatorForm').addEventListener('submit', (e) => {
        e.preventDefault();
        handleCalculator();
    });

    document.getElementById('guessingGameForm').addEventListener('submit', (e) => {
        e.preventDefault();
        handleGuessingGame();
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function handleTextManipulation() {
    const text = document.getElementById('text').value;
    const choice = document.getElementById('choice').value;
    let result = '';

    if (choice === 'camel_to_snake') {
        result = camelToSnake(text);
    } else if (choice === 'snake_to_camel') {
        result = snakeToCamel(text);
    }

    document.getElementById('textResult').innerText = `Result: ${result}`;
}

function handleCalculator() {
    const expression = document.getElementById('expression').value;
    const [x, operator, z] = expression.split(' ');
    const result = calculate(parseInt(x), operator, parseInt(z));

    document.getElementById('calcResult').innerText = `Result: ${result}`;
}

function handleGuessingGame() {
    let number = parseInt(document.getElementById('number').value);
    let attempts = parseInt(document.getElementById('attempts').value);
    const guess = parseInt(document.getElementById('guess').value);

    if (!number) {
        number = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
    }

    attempts += 1;

    let result;
    if (guess < number) {
        result = 'Too low!';
    } else if (guess > number) {
        result = 'Too high!';
    } else {
        result = `Congratulations! You guessed the number in ${attempts} attempts.`;
        number = null;
        attempts = 0;
    }

    document.getElementById('number').value = number;
    document.getElementById('attempts').value = attempts;
    document.getElementById('gameResult').innerText = result;
}
