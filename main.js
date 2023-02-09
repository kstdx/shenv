import { parse } from 'https://deno.land/std/flags/mod.ts'

const args = parse(Deno.args)

if (args.set) {
    if (args.key !== undefined && args.value !== undefined) {
        localStorage.setItem(args.key, args.value)
    } else {
        console.log(
            '%cerr:',
            'color: red; font-weight: bold;',
            'Key or value is not set'
        )
    }
} else if (args.delete) {
    if (args.key !== undefined) {
        localStorage.removeItem(args.key)
    } else {
        console.log(
            '%cerr:',
            'color: red; font-weight: bold;',
            'Key is not set'
        )
    }
} else if (args.list) {
    const items = { ...localStorage }

    for (const key in items) {
        console.log(`${key}: ${items[key]}`)
    }
} else if (args._[0] !== undefined) {
    if (localStorage.getItem(args._[0]) !== null) {
        console.log(localStorage.getItem(args._[0]))
    } else {
        console.log(
            '%cerr:',
            'color: red; font-weight: bold;',
            'The key is not found'
        )
    }
} else {
    console.log(
        '%cerr:',
        'color: red; font-weight: bold;',
        'I cannot understand!'
    )
}
