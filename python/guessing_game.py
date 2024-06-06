import random

def guessing_game():
    number = random.randint(1, 100)
    attempts = 0
    while True:
        guess = int(input("Enter your guess (between 1 and 100): "))
        attempts += 1
        if guess < number:
            print("Too low!")
        elif guess > number:
            print("Too high!")
        else:
            print(f"Congratulations! You guessed the number in {attempts} attempts.")
            break

if __name__ == "__main__":
    guessing_game()