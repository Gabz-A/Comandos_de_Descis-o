alert("Bem-Vindo a Organização Tabajaras")

var salario = parseFloat(prompt("Por Favor digite seu salario atual"))
var novosalario
var porcentagem
var aumento 
var total

if (salario <= 280){
    var total = parseInt(salario * (1 + 0.20))
    var aumento = total - salario
    porcentagem = "20%"
}

else if (salario > 280, salario < 700){
    var total = parseInt(salario * (1 + 0.15))
    var aumento = total - salario
    porcentagem = "15%"
}


else if (salario > 700, salario < 1500){
    var total = parseInt(salario * (1 + 0.10))
    var aumento = total - salario
    porcentagem = "10%"
}


else if (salario > 1500){
    var total = parseInt(salario * (1 + 0.05))
    var aumento = total - salario
    porcentagem = "5%"
}

window.alert(`Seu salario antigo era de ${salario} e aumentou para ${total}`)
window.alert(`A porcentagem de aumento foi de ${porcentagem} e o aumento foi de RS${aumento}`)













console.log(total, aumento)