function second() {
    console.log("Step 2");
}

function first() {
    console.log("Step 1");
    second();
    console.log("Step 3");
}

first();