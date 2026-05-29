'use strict';

const { createLogger, config, transports } = require('winston');

const transportConsole = new transports.Console({
    handleExceptions: true,
});

class Logger {
    constructor() {
        this.logger = createLogger({
            level: config.syslog.levels,
            level: 'info',
            exitOnError: false,
        });
        this.logger.add(transportConsole);
    }
}

module.exports = new Logger();