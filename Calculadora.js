alert("Bem Vindo a Calculadora Tabajaras")
let sinal = prompt('Digite o sinal o sinal de sua operação (+=Soma -=Subtração *=Multiplicação /=Divisão) ')
let valor1 = parseFloat(prompt('Digite o Primeiro valor'))
let valor2 = parseFloat(prompt('Digite o Segundo valor'))
let produto

if (sinal == '+') { 
    produto = +valor1 + valor2  
}  
else if (sinal == '-') {  
    produto = valor1-valor2;  
}  
else if (sinal == '*') { 
    produto = valor1*valor2;  
}  
else {  
    produto = valor1/valor2; 
}  

window.alert(`O resultado é ${produto}`)