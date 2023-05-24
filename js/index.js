function performCalculation() {
  let valueOne = +document.getElementById("one").value;
  let valueTwo = +document.getElementById("two").value;
  let operation = document.getElementById("operation").value;

  let result;
  switch (operation) {
    case "Plus":
      result = valueOne + valueTwo;
      break;
    case "Minus":
      result = valueOne - valueTwo;
      break;
    case "Times":
      result = valueOne * valueTwo;
      break;
    case "Divide":
      result = valueOne / valueTwo;
      break;
  }

  alert("Result: " + result);

  console.log(result);

  document.getElementById("calculateForm").reset();
}
