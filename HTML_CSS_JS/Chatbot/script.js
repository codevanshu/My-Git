const output = document.querySelector("#output");
const message = document.querySelector("#message");
const send = document.querySelector("#send");

send.addEventListener("click", (e) => {
  if (message.value === "") {
    return;
  }
  output.innerHTML += `<p><b>You:</b> ${message.value}</p>`;
  message.value = "";
});

message.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    send.click();
  }
});
