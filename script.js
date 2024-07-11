//script.js

document.addEventListener('DOMContentLoaded', function() {
    // Select the form and result div

    const form = document.querySelector('form');
    const resultDiv = document.getElementById('results');

    //Add an event listener for form submission
    form.addEventListener('submit',function(event) {
        event.preventDefault(); //prevent the form submitting

        //get the height and weight values
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        //Validate inputs

        if(isNaN(height) || isNaN(weight) || height <=0 || weight <= 0) {
            resultDiv.textContent = "Please enter valid height and weight .";
            return;
        }
        //Calculate BMI 
        const heightInMeters = height /100;
        const bmi = weight/(heightInMeters*heightInMeters);

        // Display the result
        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    });
});