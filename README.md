# js-ex
I created a calcutor
This is a calculator website that allows users to perform basic arithmetic operations such as addition, subtraction, and multiplication. The website is built using HTML, CSS, and javascript, and it incorporates a Calculator class that utilizes classes, switch statements, and try-catch-finally statements to handle the calculations and error handling.
#Insrtuction
Enter a number within the input field.
Tap on the specified administrator button (+, -, *).
Rehash steps 1 and 2 to enter more numbers and perform different operations.
Click on the "=" button to calculate the result.
The result will be shown within the input field.Walkthrough
#
The javascript code starts by defining a Calculator class that encapsulates the logic for performing calculations. The class has properties to store the input element, buttons, result, operator, and current number.
The init() method initializes the calculator by attaching event listeners to the buttons. The attacheventlisteners() method iterates over each button and adds a click event listener. When a button is clicked, the handlebuttonclick() method is called with the text content of the button as the argument.
The handlebuttonclick() method uses a switch statement to handle different button values. If the value is an operator, the handleoperator() method is called. If the value is "=", the calculateresult() method is called. Otherwise, the value is appended to the current number and the input is updated.
The handleoperator() method sets the operator, stores the current number as the result, clears the current number, and updates the input.
The calculateresult() method tries to parse the current number and performs the calculation based on the operator. If an error occurs, it is caught and logged to the console. Finally, the operator and result are reset.
The updateinput() method updates the input element with the current number.
An instance of the Calculator class is created and the init() method is called to start the calculator.
This implementation demonstrates the use of classes, switch statements, and try-catch-finally statements to create a functional calculator that handles calculations and errors gracefully.

