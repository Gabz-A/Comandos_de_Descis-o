alert("DICA: Quando a soma dois lados for maior que o terceiro seu triangulo sera verdadeiro")

var a = parseFloat(prompt("Digite o tamanho do primeiro lado"))
var b = parseFloat(prompt("Digite o tamanho do segundo lado"))
var c = parseFloat(prompt("Digite o tamanho do terceiro lado"))

if (a + b < c || a + c < b || b + c < a){
    alert("Seu Triângulo é mentiroso")

}

else if (a == b && a == c){
    
    alert("Seu Triângulo é Equilatero")

}

else if (a==b || a==c || b==c){
    
    alert("Seu Triângulo é Isósceles")

}

else{
    alert("Seu Triângulo é Escaleno")
}

console.log(a, b, c)