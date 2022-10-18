const commands = require('./commands')

const print = (input) => {
    process.stdout.write(input + '\n')
    process.stdout.write('prompt > ')
}

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    let args = data.toString().trim().split(' ')
    let cmd = args.shift()

    commands[cmd] ? commands[cmd](args, print) : print('command not found')

})



// const commands = require('./commands/index');

// const print = (input) => {
//     process.stdout.write(input + '\n')
//     process.stdout.write('prompt > ')
// }


// process.stdout.write('prompt > ')

// process.stdin.on('data', (data) => {
//     let args = data.toString().trim().split(' ');
//     // ['bash.js']

//     let cmd = args.shift(); // 'cat'

//     commands[cmd]
//     ? commands[cmd](args, print)
//     : print('Command invalid')
// })