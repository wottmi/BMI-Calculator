const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("btn");
calculateButton.addEventListener("click", function () {
    const result = document.getElementById("result");
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters*heightInMeters);
    result.textContent = bmi.toFixed(2);
});