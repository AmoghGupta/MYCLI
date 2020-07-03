"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Add extends command_1.Command {
    async run() {
        var _a;
        const { args, flags } = this.parse(Add);
        const name = (_a = flags.name) !== null && _a !== void 0 ? _a : 'world';
        this.log(`hello ${name} from /Users/agupta/Desktop/CLI/src/commands/add.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
exports.default = Add;
Add.description = 'describe the command here';
Add.flags = {
    help: command_1.flags.help({ char: 'h' }),
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    force: command_1.flags.boolean({ char: 'f' }),
};
Add.args = [{
        name: 'file'
    }];
