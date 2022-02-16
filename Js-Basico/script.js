//

//alert('Hello Word')

//

console.log('Ola mundo')

//Variaveis

//Armazena um dado
//let é uma variavel que pode altera seu valor
//const é uma variavel que não pode alterar o seu valor
// let a = 'Placa de Captura'

// a = 'Hd'

// a = 'Placa de captura'

// console.log(a)

// const ab = 'neymar'

// console.log(ab)
//erro

//Tipos de Dados

//Boolean -> valor verdadeiro ou falso ; true ou false
//Null -> nulo
//Undefined -> indefinido
//Number -> numeros
//String -> cadeia de caracteres

let teste = false

console.log(teste)
console.log(typeof teste)

//Operadores Aritimetricos

// + Adição
// - Substração
// * Multiplicação
// / Divisão
// % Modulo ; Resto da divisão.
// ++ Incremento
// -- Decremento

//exemplos

//Adição
// let a = 10
// a++
// let b = 15

// let c = a % b
// console.log(a)

//Atribuição

// =    X = Y   X = Y
// +=   X += Y  X = X + Y
// -=   X -= Y  X = X - Y
// *=   X *= Y  X = X * Y
// /=   X /= Y  X = X / Y
// %=   X %= Y  X = X % Y

let a = 1

a *= 30

console.log(a)

//Operadores de comparação

// == igual a -> ele compara so o valor
// === valor igual e igual -> ele compara o valor e tambem o tipo
// != não é igual -> ele compara o valor
// !==  não igual ou não igual -> ele compara o valor e tambem o tipo
// > maior que
// < menor que
// >= maior que ou igual a
// <= menor ou igual a

let b = 3
let c = 3

console.log(b <= c)

//Operadores Logicos

// && e -> se ambos for verdadeiro ele retorna verdadeiro , diferente disto ele retorna false -> os dois são verdadeiros?
// || ou
// Negativo

// let x = true
// let y = false

// let z = x && y

// console.log(z)

//exemplo do &&
// ele compara os dois valores
//caso os dois ser verdadeiro eles retornam verdadeiro
//caso um for falso retorna falso

//para ir em um parque aquatico no brinquedo onda é preciso ter:
//ter 18 ou mais
//e ter que ter a altura igual ou maior que 1,70cm
let idade = 35
let altura = 170

let maior18 = idade >= 18
let maior170 = altura >= 170
let podeir = maior18 && maior170

console.log('idade', idade)
console.log('altura maior que 1,70 cm?', maior170)
console.log('Pode ir no brinquedo?', podeir)

// exemplo ||

//Ele compara os dois valores e retorna o verdadeiro

// || false caso os dois são falsos

// EM UM SHOW PARA TER INGRESSOS DE GRAÇA:
//PARA TER GRATUIDADE SE TIVER MENOS DE 10 ENTRE DE GRAÇA E MAIOR QUE 60 ANOS ENTRA DE GRAÇA

let idadex = 60

let menor10 = idadex <= 10
let maior60 = idadex >= 60
let gratuidade = menor10 || maior60

console.log('idade', idadex)
console.log('maior que 60 anos', maior60)
console.log('menor que 10 anos', menor10)

console.log('Tem direito a gratuidade?', gratuidade)

//Negativo
// João é maior que 20 anos?

let i = 15

let maior20 = i >= 20
let menor20 = !maior20 // ele não é maior que 20 anos

console.log(maior20)
console.log(menor20)

console.log(!true) // ele não é verdadeiro?
console.log(!false) // ele não é falso?

// Strings

let str = 'valor falsos ' + 10

//Concatenação ele soma os dois textos
str += ' outro texto'
console.log(str)
