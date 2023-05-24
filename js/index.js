function Calculate() {
    let valueOne = +document.getElementById("one").value;
    let valueTwo = +document.getElementById("two").value;
    let operation = document.getElementById("calculate").value;
  
    let result;
    switch (operation){
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

    document.getElementById("calculate").reset();
  }