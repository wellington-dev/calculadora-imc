
document.querySelector('button').onclick=(e)=>{
    e.preventDefault()
    calculadoraImc()        
}


function calculadoraImc() {
    const nome = document.querySelector('.name').value;
    const altura = document.querySelector('.altura').value;
    const peso = document.querySelector('.peso').value;
    const result = document.querySelector('.result');

    if(nome !=='' && altura !=='' && peso !==''){

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if(valorIMC < 18.5){
        classificacao = 'abaixo do peso.';
    } else if(valorIMC < 25){
        classificacao = 'com peso ideal, Parabens!!!';
    } else if(valorIMC < 30){
        classificacao = 'levemente acima do peso.';
    } else if(valorIMC < 35){
        classificacao = 'com obsidade grau I';
    } else if(valorIMC < 40){
        classificacao = 'com obsidade grau II'
    } else{
        classificacao = 'com obsidade grau III. Cuidado!!'
    }
    
    result.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

}else{
       result.textContent = 'Preencha todos os campos!!!'
    }
    
}


