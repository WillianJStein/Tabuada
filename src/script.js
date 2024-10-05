function calcularTabuada() {
    const number = document.getElementById("number").value;
    const result = document.getElementById("result");
    let tabuada = '';

    for (let i=1; i<=10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}` + <br>;
        result.innerHTML = tabuada;
        }
    }
    