// ATM Banking System

let pin = 1234;

let balance = 5000;

let enteredPin = 1234;     // الرقم اللي المستخدم دخله

let operation = "withdraw"; // withdraw, deposit, check, changePin

let amount = 1000;

let newPin = 5678;

if (enteredPin === pin) {

    switch (operation) {

        case "withdraw":

            if (amount <= balance) {

                balance = balance - amount;

                console.log("Withdrawal successful.");

                console.log("Current Balance: " + balance);

            } else {

                console.log("Error: Insufficient balance.");

            }

            break;

        case "deposit":

            if (amount > 0) {

                balance = balance + amount;

                console.log("Deposit successful.");

                console.log("Current Balance: " + balance);

            } else {

                console.log("Error: Deposit amount must be greater than zero.");

            }

            break;

        case "check":

            console.log("Current Balance: " + balance);

            break;

        case "changePin":

            if (newPin >= 1000 && newPin <= 9999) {

                pin = newPin;

                console.log("PIN changed successfully.");

            } else {

                console.log("Error: PIN must contain exactly 4 digits.");

            }

            break;

        default:

            console.log("Invalid operation.");

    }

} else {

    console.log("Wrong PIN.");

}