// E-Commerce Checkout System

let customerName = "Ferial";

let productCategory = "Electronics";

let productPrice = 1000;

let quantity = 2;

let couponCode = "SAVE10";

let paymentMethod = "Visa";

// Calculate Subtotal

let subtotal = productPrice * quantity;

// Category Discount

let discount = 0;

if (productCategory == "Electronics") {

    discount = subtotal * 0.10;

} else if (productCategory == "Clothes") {

    discount = subtotal * 0.15;

} else if (productCategory == "Food") {

    discount = subtotal * 0.05;

}

// Coupon Discount

if (couponCode == "SAVE10") {

    discount = discount + 100;

}

// Payment Discount

if (paymentMethod == "Visa") {

    discount = discount + 50;

}

// Final Price

let finalPrice = subtotal - discount;

// Bonus

if (finalPrice < 0) {

    finalPrice = 0;

}

// VAT

let vat = finalPrice * 0.14;

// Total

let total = finalPrice + vat;

// Invoice

console.log("Customer: " + customerName);

console.log("Category: " + productCategory);

console.log("Subtotal: " + subtotal);

console.log("Discount: " + discount);

console.log("VAT: " + vat);

console.log("Total Price: " + total);