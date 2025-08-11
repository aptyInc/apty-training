function printNamePattern() {
    const namePattern = [
        [' N ', '  ', '  ', 'N ', ' ',  'I', ' ', ' ', 'S', 'S', 'S', 'S', ' ', ' ', 'H', ' ', ' ', 'H'],
        [' N ', 'N', '  ', ' N ', ' ',  'I', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', 'H', ' ', ' ', 'H'],
        [' N ', '  ', 'N', ' N ', ' ',  'I', ' ', ' ', 'S', 'S', 'S', 'S ', ' ', 'H', 'H', 'H','H'],
        [' N ', '  ', '  ', 'N ', ' ',  'I', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', 'H', ' ', ' ', 'H'],
        [' N ', '  ', '  ', 'N',  ' ',  ' I', ' ', ' ', 'S', 'S', 'S', 'S', ' ', ' ', 'H', ' ', ' ', 'H']
    ]

    let consoleOutput = ''

    for (const row of namePattern) {
        let line = ''
        for (const char of row) {
            line += char 
        }

        console.log(line)
        consoleOutput += line + '\n'
    }

    document.getElementById('console-output').innerText = consoleOutput
}