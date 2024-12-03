const numberElement = document.getElementById("number");
const resultElement = document.getElementById("result");

function calcularTabuada() {
  const number = numberElement.value;
  resultElement.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const result = `${number} \u00D7 ${i} = ${number * i}`;

    const element = document.createElement("p");

    element.innerText = result;

    resultElement.appendChild(element);
  }
}
