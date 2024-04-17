# Tax Calculator Web Application

This is a web application for calculating taxes based on annual gross income, extra income, deductions, and age. The application ensures that only numerical input is accepted in relevant fields, shows error icons for invalid inputs, restricts age to be under 500, and provides live tracking of values with automatic formatting for better user experience.

## Features

1. **Numerical Input Validation:** Text boxes only accept numerical input, and if a user tries to enter characters, it displays an error icon and message.
2. **Age Restriction:** If the user enters an age greater than 500, an error is displayed to notify the user.
3. **Live Tracking and Formatting:** The input values are live-tracked, and whenever a user enters a value, it automatically formats it with commas for better readability.
4. **Edge Case Handling:** The application handles edge cases such as negative inputs for income and age, displaying appropriate error messages.
5. **Tax Calculation:** Taxes are calculated based on the provided inputs according to predefined tax rates.

## Usage

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser.

## Demo

You can view the live demo of the Tax Calculator web application [here](https://tax-application-ajaydattu.netlify.app/).

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)

## Tests

![Tests Passing](screenshots/tests-passing.png)

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
