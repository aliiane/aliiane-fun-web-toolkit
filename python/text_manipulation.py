def camel_to_snake(camel):
    snake = ""
    for item in camel:
        if item.isupper():
            snake += "_" + item.lower()
        else:
            snake += item
    return snake.lstrip("_")

def snake_to_camel(snake):
    components = snake.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

def main():
    choice = input("Choose conversion (1: camel_to_snake, 2: snake_to_camel): ")
    text = input("Enter text: ")
    if choice == "1":
        print("Converted to snake_case:", camel_to_snake(text))
    elif choice == "2":
        print("Converted to CamelCase:", snake_to_camel(text))
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main()