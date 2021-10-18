function printSum() {
    debugger
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
  }
  
  function calculateSum(num1, num2) {
    let result = num1 + num2;
    return result;
  }
  
  function init() {
    document.getElementById('printSum').addEventListener('click', printSum);
  }
  
  window.addEventListener('DOMContentLoaded', init);