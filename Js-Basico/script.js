// //

// //alert('Hello Word')

// //

// console.log('Ola mundo')

// //Variaveis

// //Armazena um dado
// //let é uma variavel que pode altera seu valor
// //const é uma variavel que não pode alterar o seu valor
// // let a = 'Placa de Captura'

// // a = 'Hd'

// // a = 'Placa de captura'

// // console.log(a)

// // const ab = 'neymar'

// // console.log(ab)
// //erro

// //Tipos de Dados

// //Boolean -> valor verdadeiro ou falso ; true ou false
// //Null -> nulo
// //Undefined -> indefinido
// //Number -> numeros
// //String -> cadeia de caracteres

// let teste = false

// console.log(teste)
// console.log(typeof teste)

// //Operadores Aritimetricos

// // + Adição
// // - Substração
// // * Multiplicação
// // / Divisão
// // % Modulo ; Resto da divisão.
// // ++ Incremento
// // -- Decremento

// //exemplos

// //Adição
// // let a = 10
// // a++
// // let b = 15

// // let c = a % b
// // console.log(a)

// //Atribuição

// // =    X = Y   X = Y
// // +=   X += Y  X = X + Y
// // -=   X -= Y  X = X - Y
// // *=   X *= Y  X = X * Y
// // /=   X /= Y  X = X / Y
// // %=   X %= Y  X = X % Y

// // let a = 1

// // a *= 30

// // console.log(a)

// //Operadores de comparação

// // == igual a -> ele compara so o valor
// // === valor igual e igual -> ele compara o valor e tambem o tipo
// // != não é igual -> ele compara o valor
// // !==  não igual ou não igual -> ele compara o valor e tambem o tipo
// // > maior que
// // < menor que
// // >= maior que ou igual a
// // <= menor ou igual a

// // let b = 3
// // let c = 3

// // console.log(b <= c)

// //Operadores Logicos

// // && e -> se ambos for verdadeiro ele retorna verdadeiro , diferente disto ele retorna false -> os dois são verdadeiros?
// // || ou
// // Negativo

// // let x = true
// // let y = false

// // let z = x && y

// // console.log(z)

// //exemplo do &&
// // ele compara os dois valores
// //caso os dois ser verdadeiro eles retornam verdadeiro
// //caso um for falso retorna falso

// //para ir em um parque aquatico no brinquedo onda é preciso ter:
// //ter 18 ou mais
// //e ter que ter a altura igual ou maior que 1,70cm
// let idade = 35
// let altura = 170

// let maior18 = idade >= 18
// let maior170 = altura >= 170
// let podeir = maior18 && maior170

// console.log('idade', idade)
// console.log('altura maior que 1,70 cm?', maior170)
// console.log('Pode ir no brinquedo?', podeir)

// // exemplo ||

// //Ele compara os dois valores e retorna o verdadeiro

// // || false caso os dois são falsos

// // EM UM SHOW PARA TER INGRESSOS DE GRAÇA:
// //PARA TER GRATUIDADE SE TIVER MENOS DE 10 ENTRE DE GRAÇA E MAIOR QUE 60 ANOS ENTRA DE GRAÇA

// // let idadex = 60

// // let menor10 = idadex <= 10
// // let maior60 = idadex >= 60
// // let gratuidade = menor10 || maior60

// // console.log('idade', idadex)
// // console.log('maior que 60 anos', maior60)
// // console.log('menor que 10 anos', menor10)

// // console.log('Tem direito a gratuidade?', gratuidade)

// //Negativo
// // João é maior que 20 anos?

// // let i = 15

// // let maior20 = i >= 20
// // let menor20 = !maior20 // ele não é maior que 20 anos

// // console.log(maior20)
// // console.log(menor20)

// // console.log(!true) // ele não é verdadeiro?
// // console.log(!false) // ele não é falso?

// // Strings

// // let str = 'valor falsos ' + 10

// // //Concatenação ele soma os dois textos
// // str += ' outro texto'
// // console.log(str)

// // Como transformar numeros em strings

// //Parseint -> transforma em numero a string
// //ele pega apenas a parte inteira de um numero

// //ParseFloat -> transforma uma string em numero com casas decimais

// let a = '10.5'
// let b = '6'
// let c = parseFloat(a) + parseInt(b)
// console.log(c)

// //Alert e Prompt

// // alert('Bom dia,igor')

// let numero = parseInt(prompt('Digite um número'))

// let dobro = numero + numero

// alert(`O dobro de ${numero} é ${dobro}`)

//Estruturas condicionais

//if -> se
//else -> se não

let idade = 17

//QUANDO TIVER APENAS UMA LINHA DE COMANDO
// if (idade >= 18) console.log('pode')
// else console.log('não pode')

//QUANDO TIVER MAIS LINHAS DE COMANDO
// if (idade >= 18) {
//   console.log('pode')
//   console.log('Qual seu pedido?')
// } else {
//   console.log('não pode')
//   console.log('volte futuramente')
// }

//exer do curso
// if (idade < 18 || idade > 70) {
//   console.log('pode')
//   console.log('qual seu pedido')
// } else {
//   console.log('não pode')
//   console.log('Peça seu pedido')
// }

//Operador Ternario
// idade >= 18 ? console.log('Pode') : console.log('não pode')

//
// let pode = idade >= 18 ? true : false

// console.log(pode)

//Condicionais - Switch

//Verificar se um aluno passo numa prova

// let nota1 = 10
// let nota2 = 1

// let media = (nota1 + nota2) / 2

// let conceito = ''

// if (media >= 8) {
//   conceito = 'otimo'
// } else if (media > 6.5) {
//   conceito = 'bom'
// } else {
//   conceito = 'regular'
// }

// conceito = 'Mais ou menos'

// console.log(media)
// console.log(conceito)

// switch (conceito) {
//   case 'otimo':
//     console.log('Parabéns, você é um otimo aluno')
//     break
//   case 'bom':
//     console.log('Você está quase perfeito')
//     break
//   case 'regular':
//     console.log('Estude mais um pouco')
//     break

//   default:
//     console.log('Houve algum erro')
//     break
// }

//Repetição - FOR e WHILE

//FOR
// let numero = 5

// for (let i = 3; i < numero; i++) {
//   console.log(`executando o for,pela ${i} vez `)
// }

//wHILE ->
// USAR O WHILE QUANDO TEM UMA CONDIÇÃO QUE NOS QUER QUE SEJA VERDAIRA, MAS NÃO SABE QUANDO VAI SER VERDADEIRO
// let numero = Math.random() * 100

// while (numero < 90) {
//   console.log(`numero ${numero}`)
//   numero = Math.random() * 100
// }

// console.log(numero)
// console.log('Acabou')

//ARRAYS
//Conjunto de dados
//Sequencial
//começa no zero

// let alunos = ['Igor', 'José', 'Marcos ', 'Mariana', 'Joana', 'João']

// // for (let i = 0; i < alunos.length; i++) {
// //   console.log(alunos[i])
// // }

// //INDEX É A POSIÇÃO DO ARRAYS
// for (let aluno of alunos) {
//   console.log(aluno)
// }

//FUNÇÕES
//CONJUNTO DE INTRUÇÕES QUE VOCÊ PASSA AO JAVASCRIPT
//FUNÇÕES RECEBEM ARGUMENTOS VALORES PARA PASSA NA FUNÇÃO

// function media(n1, n2) {
//   let nota1 = n1
//   let nota2 = n2
//   let media = (nota1 + nota2) / 2
//   // console.log(media)

//   return media
// }

// let result1 = media(6, 7)
// let m = media

// let result2 = m(2, 3)

// console.log(result1)

// console.log(result2)

// //

// function saudacao() {
//   return 'Olá Mundo'
// }

// let s = saudacao

// console.log(s())

//Função Anonima É UMA FUNÇÃO DENTRO DE UMA VARIAVEL

// let media = function (n1, n2) {
//   return (n1 + n2) / 2
// }

// //MESMA COISA
// let m = media(5, 6)

// console.log(m)

//ARROW FUNCITON
// let media = (n1, n2) => {
//   return (n1 + n2) / 2
// }

//    / / / //  / / //  / / / //  / / //  / / / //  / / / / //  / / /

//nome do aluno - nota1 - nota 2 - media - Aprovado

// let nomes = ['Igor', 'José', 'Maria']
// let notasA = [7.0, 6.5, 9, 4]
// let notasB = [9.0, 7.2, 8.8]

// function media(n1, n2) {
//   return (n1 + n2) / 2
// }

// for (let index in nomes) {
//   let nota1 = notasA[index]
//   let nota2 = notasB[index]

//   function passou(media) {
//     if (media > 7) {
//       return 'Aprovado'
//     } else {
//       return 'Reprovado'
//     }
//   }

//   console.log(
//     ` ${nomes[index]} - ${notasA[index]} - ${notasB[index]} - ${media(
//       nota1,
//       nota2
//     )} - ${passou(media)}`
//   )
// }

// OBJETOS

// let aluno = {
//   nome: 'Igor',
//   idade: 17,
//   notas: [8.5, 7.2]
// }

// let novaProp = 'LastName'

// //COMO INSERIR UMA NOVA PROPRIEDADE
// aluno.matricula = 123456

// aluno[novaProp] = 'Oliveira'

// console.log(aluno)

let aluno = {
  nome: 'Igor',
  notas: [8, 9]
}

let aluno2 = {
  nome: 'Jose',
  notas: [7, 9]
}

console.log(aluno)
console.log(aluno2)
