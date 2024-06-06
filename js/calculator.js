function calculate(x, operator, z) {
    switch (operator) {
        case '+':
            return x + z;
        case '-':
            return x - z;
        case '*':
            return x * z;
        case '/':
            return x / z;
        default:
            return 'Invalid operator';
    }
}
