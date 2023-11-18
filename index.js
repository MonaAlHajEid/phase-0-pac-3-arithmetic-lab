// index.js

// Basic Math Functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    // Check if b is zero to avoid division by zero
    return b !== 0 ? a / b : "Cannot divide by zero";
  }
  
  // Math + Assignment Functions
  function increment(n) {
    return ++n;
  }
  
  function decrement(n) {
    return --n;
  }
  
  // Parsing Numbers Functions
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  