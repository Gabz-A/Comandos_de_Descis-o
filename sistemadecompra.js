alert("Bem vindo ao site de automatização mental de compras pela internet")
var saldo = prompt("Digite o saldo disponivel em sua conta")
var compra = prompt("Digite o valor da compra que sera realizada?")

if (saldo < compra){
    alert("Saldo insuficiente para realização da compra")
}else if (saldo >= compra){
    var total = saldo - compra 
    alert(`Compra realizada com suscesso seu saldo agora é de RS ${total} `)
}
