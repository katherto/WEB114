document.querySelector(".nes-btn").addEventListener("click", () => {
  const form = document.forms.contact;
  const inputs = [...form].filter((item) => item.type !== "button");
  let output = "";

  inputs.forEach((input) => {
    if (input.type === "checkbox" && input.checked) {
      output += `${input.labels[0].innerText}: ${
        input.checked ? "Yes" : "No"
      }\n`;
    }

    if (input.type === "radio" && input.checked) {
      output += `I have money and can pay for this: ${
        input.labels[0].innerText === "True" ? "Yes" : "No"
      }\n`;
    }

    // skips outputting unchecked inputs
    if (input.type === "radio" || input.type === "checkbox") {
      return;
    }

    output += `${input.labels[0].innerText}: ${input.value}\n`;
  });

  alert(output);

  form.reset();
});
