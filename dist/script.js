function calculate() {

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    document.getElementById("outputnum1").value = num1;
    document.getElementById("outputnum2").value = num2;

    if (operator === "add") {
        result = num1 + num2;
      } else if (operator === "subtract") {
        result = num1 - num2;
      } else if (operator === "multiply") {
        result = num1 * num2;
      } else if (operator === "divide") {
        result = num1 / num2;
      }


    document.getElementById("result").value = result; //this line ensures the value is passed to the html file
    
}