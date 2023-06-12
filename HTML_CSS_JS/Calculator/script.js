const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    let value = e.target.innerText;
    switch (value) {
      case "AC":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += value;
        break;
    }
  });
});
