const sqlConnection = require("../../sqlite");

const createMusic = require("./createMusic");

async function migrationRun() {
    const schemas = [
        createMusic
    ].join('');

    sqlConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.log(error))
}


module.exports = migrationRun