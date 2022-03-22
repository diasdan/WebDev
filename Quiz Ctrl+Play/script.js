

document.getElementById("answer").onclick = validate;

function validate() {
    var checkboxes = document.getElementsByName("input");
    var checkboxChecked = [];
    let nota = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked && (checkboxes[i].value === "right")) {
            checkboxChecked.push(checkboxes[i]);
            nota++;
        }
    }


    if (nota === 8) {
        principal.innerHTML = ` <div id=res> <h2> Seu número de acertos foi: </h2>
        <h1>${nota}</h1>
        <p>Excelente! Você é um verdadeiro expert em jogos e tecnologia! Venha se tornar ainda mais especialista! Venha conhecer a Ctrl+Play!</p><div>
        <h2><a href='form.html'>Clique Aqui!</a></h2>`;
    }

    else if (nota < 7 && nota > 4) {
        principal.innerHTML = ` <div id=res> <h2> Seu número de acertos foi: </h2>
        <h1>${nota}</h1>
        <p>Parabéns! Você conhece bastante sobre tecnologia! Venha se tornar ainda mais especialista! Venha conhecer a Ctrl+Play!</p><div>
        <h2><a href='form.html'>Clique Aqui!</a></h2>`;
    }

    else if (nota < 4 && nota > 1) {
        principal.innerHTML = ` <div id=res> <h2> Seu número de acertos foi: </h2>
        <h1>${nota}</h1>
        <p>Você acertou poucas questões, que tal adquirir mais conhecimento em tecnologia? Venha conhecer a Ctrl+Play!</p><div>
        <h2><a href='form.html'>Clique Aqui!</a></h2>`;
    }

    else if (nota === 0) {
        principal.innerHTML = ` <div id=res> <h2> Seu número de acertos foi: </h2>
        <h1>${nota}</h1>
        <p>Infelizmente você não acertou nenhuma questão. Que tal adquirir mais conhecimentos em tecnologia? Venha conhecer a Ctrl+Play!</p><div>
        <h2><a href='form.html'>Clique Aqui!</a></h2>`;

    }
}