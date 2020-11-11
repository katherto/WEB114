// create handler function below
document.querySelector(".nes-btn").addEventListener("click", () => {
  const inputs = [...document.querySelectorAll("input")];
  let output = "";

  inputs.splice(3, 0, document.querySelector("textarea"));

  inputs.forEach((input) => {
    if (input.type === "checkbox" && input.checked) {
      // this is a deviation from instructions because I like formatted output
      // actual solution: `${input.labels[0].innerText}: ${input.checked}\n`
      output += `${input.labels[0].innerText}: ${
        input.checked ? "Yes" : "No"
      }\n`;
    } else if (input.type === "radio" && input.checked) {
      output += `I have money and can pay for this: ${
        // actual solution: input.labels[0].innerText.toLowerCase()
        input.labels[0].innerText === "True" ? "Yes" : "No"
      }\n`;
    } else {
      // skips outputting unchecked inputs
      if (input.type === "radio" || input.type === "checkbox") {
        return;
      }
      output += `${input.labels[0].innerText}: ${input.value}\n`;
    }
  });

  alert(output);

  document.querySelector("#contact").reset();
});
