class Calculator {
  constructor() {
    this.input = document.querySelector(".input input");
    this.buttons = document.querySelectorAll(".buttons button");
    this.result = 0;
    this.operator = "";
    this.currentNumber = "";
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        this.handleButtonClick(button.textContent);
      });
    });
  }

  handleButtonClick(value) {
    switch (value) {
      case "+":
      case "-":
      case "*":
        this.handleOperator(value);
        break;
      case "=":
        this.calculateResult();
        break;
      default:
        this.currentNumber += value;
        this.updateInput();
        break;
    }
  }

  handleOperator(operator) {
    this.operator = operator;
    this.result = parseFloat(this.currentNumber);
    this.currentNumber = "";
    this.updateInput();
  }

  calculateResult() {
    try {
      const number = parseFloat(this.currentNumber);
      switch (this.operator) {
        case "+":
          this.result += number;
          break;
        case "-":
          this.result -= number;
          break;
        case "*":
          this.result *= number;
          break;
        default:
          throw new Error("Invalid operator");
      }
      this.currentNumber = this.result.toString();
      this.updateInput();
    } catch (error) {
      console.error(error);
    } finally {
      this.operator = "";
      this.result = 0;
    }
  }

  updateInput() {
    this.input.value = this.currentNumber;
  }
}

const calculator = new Calculator();
calculator.init();
