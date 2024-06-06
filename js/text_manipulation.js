function camelToSnake(camel) {
    return camel.replace(/([A-Z])/g, '_$1').toLowerCase();
}

function snakeToCamel(snake) {
    return snake.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());
}