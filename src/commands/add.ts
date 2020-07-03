import {Command, flags} from '@oclif/command'
import {existsSync, writeFileSync} from 'fs'

export default class Add extends Command {
  static description = 'add new note'

  static examples = [
    `$ ag-oclif add "Amogh" "Gupta" -n "itsaflag"
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name to print'}),
  }


  // 2 objects mean 2 arguments
  // 'name' args is required but 'description' is optional
  static args = [
    {
      name: 'name',
      required: true
    },
    {
      name: 'description',
    }
]

  async run() {
    const {args,flags} = this.parse(Add)
    console.log("****************")
    console.log(args)
    console.log(flags)
    console.log("****************")
    const fileExtension = '.md'
    const fileName = `${args.name}${args.name.slice(-3) === fileExtension ? '' : fileExtension}`
    const noteName = fileName.slice(0, -3)

    if (existsSync(fileName)) {
      this.log(`Note "${noteName}" already exists, use "edit" or "delete" instead`)
    } else {
      writeFileSync(fileName, `# ${args.description}`)
      this.log(`Created "${noteName}" note`)
    }
  }
}

// to test run
//ag-oclif add "Amogh" "Gupta" -n "itsaflag"
