// University Student Portal

let studentName = "Ferial";

let attendance = 90;

let midterm = 20;

let finalExam = 50;

let assignment = 20;

let tuitionPaid = true;

// Check Tuition

if (tuitionPaid == false) {

    console.log("You cannot view your result.");

} else {

    // Check Attendance

    if (attendance < 75) {

        console.log("Failed");

    } else {

        // Calculate Total

        let total = midterm + finalExam + assignment;

        console.log("Student: " + studentName);

        console.log("Total: " + total);

        // Grade

        if (total >= 90) {

            console.log("Grade: A");

            console.log("Status: Passed");

            console.log("Scholarship Eligible");

        } else if (total >= 80) {

            console.log("Grade: B");

            console.log("Status: Passed");

        } else if (total >= 70) {

            console.log("Grade: C");

            console.log("Status: Passed");

        } else if (total >= 60) {

            console.log("Grade: D");

            console.log("Status: Passed");

        } else {

            console.log("Grade: F");

            console.log("Status: Failed");

        }

    }

}
