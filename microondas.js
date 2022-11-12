const readline = require('readline-sync')

console.log(`-----------MICROONDAS------------   
    1 - Pipoca – 10 segundos
    2 - Macarrão – 8 segundos
    3 - Carne – 15 segundos
    4 - Feijão – 12 segundos
    5 - Brigadeiro – 8 segundos
----------------------------------`)

var option = readline.question('Digite o numero do prato: ')

if (option > 5) {
    console.log('Prato inexistente.')
} else {
    var mudarTempo = readline.question('Deseja mudar o tempo?[s ou n] ')
}

if (mudarTempo !=  's' ) {
    console.log('Tempo padrão')
}else{
    var novoTempo = readline.question('Novo tempo: ')
    if (option == 1) {
        if (novoTempo > 20 && novoTempo < 30) {
            console.log('A comida queimou')
        } else if (novoTempo < 10) {
            console.log('Tempo insuficiente')
        } else if (novoTempo > 30) {
            console.log('KABUMM')
        }

    } else if (option == 2 || option == 5) {
        if (novoTempo > 16 && novoTempo < 24) {
            console.log('A comida queimou')
        } else if (novoTempo < 8) {
            console.log('Tempo insuficiente')
        } else if (novoTempo > 24) {
            console.log('KABUMM')
        }

    } else if (option == 3) {
            if (novoTempo > 30 && novoTempo < 45) {
                console.log('A comida queimou')
            } else if (novoTempo < 15) {
                console.log('Tempo insuficiente')
            } else if (novoTempo > 45) {
                console.log('KABUMM')
            }

    } else if (option == 4) {
            if (option == 4 && novoTempo > 24 && novoTempo < 36) {
                console.log('A comida queimou')
            } else if (novoTempo < 12) {
                console.log('Tempo insuficiente')
            } else if (novoTempo > 36) {
                console.log('KABUMM')
            }
    }
}

console.log('Prato pronto, bom apetite!!!')
