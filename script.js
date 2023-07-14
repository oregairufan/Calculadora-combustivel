let etanol, gasolina;

function calcular() {
    etanol = parseFloat(formularioflex.valoretanol.value.replace(',','.'));
    gasolina = parseFloat(formularioflex.valorgasolina.value.replace(',','.'));

    if(calcular() == 0) {

        document.querySelector('#status').src = '/Conteudo7/img/neutro.png'
    }
    else if(etanol <= (0.72 * gasolina)) {

        document.querySelector('#status').src = '/Conteudo7/img/alcool.png';
    }else {
        
        document.querySelector('#status').src = '/Conteudo7/img/gasolina.png';
    }
}

function limpar() {
    document.querySelector('#status').src = '/Conteudo7/img/neutro.png'
}