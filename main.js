let result_count = document.getElementById("count");
let i_btn = document.getElementById("i-btn");
let d_btn = document.getElementById("d-btn");
let save_button = document.getElementById("save-button");
let peragraph_result = document.getElementById("result-output");

let countY = result_count.style.bottom;

function increment() {
  result_count.textContent++;
}

function decrement() {
  if (result_count.textContent > 0) {
    result_count.textContent--;
  }
}

function save_result() {
  peragraph_result.textContent += " - " + result_count.textContent;
}

function reset() {
  peragraph_result.textContent = "Count has been reset";
  result_count.textContent = 0;
}
