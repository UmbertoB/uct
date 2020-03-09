const InputHandler = require('./lib/input-handler');
const Logs = require('./lib/logs');
const create = require('./commands/create');
const init = require('./commands/init');

// commands
const { CREATE, INIT, HELP } = require('./utils');

module.exports = () => {

    try {

        const input = new InputHandler();
    
        const args = input.args;
        const options = input.options;
    
        switch (options[0]) {
    
            case CREATE.cmd:
                create(options, args);
                break;
    
            case INIT.cmd:
                init(options, args);
                break;
    
            case HELP.cmd:
                Logs.print('Printing Help Info');
                break;
                
            default:
                Logs.defaultLog();
                process.prompt;
        }

    } catch(e) {
        Logs.error(e.message);
    }

};