def calculate(x, operator, z):
    if operator == "+":
        return x + z
    elif operator == "-":
        return x - z
    elif operator == "*":
        return x * z
    elif operator == "/":
        return x / z
    else:
        return "Invalid operator"

def main():
    expression = input("Enter expression (e.g., 2 + 2): ")
    x, operator, z = expression.split()
    x = int(x)
    z = int(z)
    result = calculate(x, operator, z)
    print(f"Result: {result}")

if __name__ == "__main__":
    main()
