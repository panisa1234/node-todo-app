const yargs = require('yargs');

yargs.version('1.0.0');

yargs.command({
    command: 'list',
    describe: 'List all todo.',
    handler(){
        Console.log('Listing...');
    }
});
const argv=yargs.argv;
Console.log(argv);