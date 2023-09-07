let num1 = 0;
let num2 = 0;
let op = "";

let ac = document.querySelector("#ac");
let del = document.querySelector("#delete");
let text = document.querySelector("#text");
let nums = document.querySelectorAll("button.num");
nums.forEach((num) => {
  num.addEventListener("click", appendText);
});
window.addEventListener("load", clear);
ac.addEventListener("click", clear);
del.addEventListener("click", () => {
  text.value = text.value.substring(0, text.value.length - 1);
});

let operators = document.querySelectorAll(".op");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (text.value == "Error") {
      clear();
      return;
    }
    let btn = event.target;
    if (!btn.textContent == "-" && text.value == "") {
      return;
    } else if (
      (btn.textContent == "-" && text.value == "") ||
      (btn.textContent == "-" && !op == "" && text.value.split(" ")[2] == "")
    ) {
      appendOp(btn);
      return;
    }
    if (op == "") {
      num1 = parseFloat(text.value);
      op = btn.textContent;
      appendSpace();
      appendOp(btn);
      appendSpace();
    } else if (!op == "" && !isNaN(parseFloat(text.value.split(" ")[2]))) {
      num2 = parseFloat(text.value.split(" ")[2]);
      text.value = operate();
      if (text.value == "Error") {
        return;
      }
      num1 = parseFloat(text.value);
      op = btn.textContent;
      appendSpace();
      appendOp(btn);
      appendSpace();
      num2 = 0;
    }
  });
});
// equal
let equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  if (text.value == "Error") {
    clear();
    return;
  }
  if (op == "") return;
  if (text.value.split(" ")[2] == "" || text.value.split(" ")[2] == "-") return;
  num2 = parseFloat(text.value.split(" ")[2]);
  text.value = operate();
  num1 = parseFloat(text.value);
  num2 = 0;
  op = "";
});

// decimal dote
let dote = document.querySelector("#dote");
dote.addEventListener("click", () => {
  if (text.value.split(" ")[0] == "") return;
  if (text.value.split(" ")[2] == "") return;
  if (op == "" && text.value.split(" ")[0].toString().includes(".")) return;
  if (op != "" && text.value.split(" ")[2].toString().includes(".")) return;
  text.value += ".";
});

function appendOp(op) {
  text.value += op.textContent;
}
function appendSpace() {
  text.value += " ";
}
function appendText() {
  char = this.textContent;
  text.value += char;
}
function clear() {
  text.value = "";
  num1 = 0;
  num2 = 0;
  op = "";
}
function operate() {
  if (op == "+") {
    return num1 + num2;
  }
  if (op == "-") return num1 - num2;
  if (op == "*") return num1 * num2;
  if (op == "/") {
    if (num2 == 0) return "Error";
    return num1 / num2;
  }
  if (op == "%") {
    if (num2 == 0) return "Error";
    return num1 % num2;
  }
}
