let inputEl1 = document.getElementById("my-input1");
let inputEl2 = document.getElementById("my-input2");
let resultEl = document.getElementById("result");
let button = document.getElementById("button");

button.onclick = function () {
  let num = Number(inputEl1.value) + Number(inputEl2.value);
  resultEl.textContent = "result: " + num;
};

document.getElementById("calculate").addEventListener("click", function () {
  let input1Value = Number(document.getElementById("input1").value);
  let input2Value = Number(document.getElementById("input2").value);

  let additionResult = input1Value + input2Value;
  let subtractionResult = input1Value - input2Value;
  let multiplicationResult = input1Value * input2Value;

  let divisionResult =
    input2Value !== 0 ? input1Value / input2Value : "Cannot divide by zero";

  document.getElementById("additionResult").textContent =
    "Addition: " + additionResult;
  document.getElementById("subtractionResult").textContent =
    "Subtraction: " + subtractionResult;
  document.getElementById("multiplicationResult").textContent =
    "Multiplication: " + multiplicationResult;
  document.getElementById("divisionResult").textContent =
    "Division: " + divisionResult;
});
document.getElementById("getFat").addEventListener("click", function () {
  let height = Number(document.getElementById("height").value);
  let waist = Number(document.getElementById("waist").value);
  let gender = document.getElementById("gender").value;
  let fatPercentage;
  if (waist !== 0) {
    if (gender === "male") {
      fatPercentage = 64 - (20 * height) / waist;
    } else {
      fatPercentage = "Invalid gender";
    }
  } else {
    fatPercentage = "Cannot divide by zero";
  }
  document.getElementById("fatPercentage").textContent =
    "Fat Percentage: " + fatPercentage.toFixed(2) + "%";
});
