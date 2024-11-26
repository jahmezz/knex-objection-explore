const path = require('path');

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, './dev.sqlite3'),
        },
        useNullAsDefault: true,
        migrations: {
            directory: path.resolve(__dirname, './migrations'),
        },
        seeds: {
            directory: path.resolve(__dirname, './seeds'),
        },
    },
};