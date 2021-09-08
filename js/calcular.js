// Inserir valores dos botões na input 'visor'
function inserir(n)
{
    document.querySelector('input#visor').value += `${n}` // denifir numero de acordo com o valor enviado
}

// Limpar todos os valores da input 'visor'
function limpar()
{
    document.querySelector('input#visor').value = ''; // definir como vazio
}

// Calcular todos os valores da input 'visor'
function calcular()
{
    let visor = document.querySelector('input#visor');

    visor.value = eval(visor.value); //eval faz todo o cálculo presente na input 'visor'
}