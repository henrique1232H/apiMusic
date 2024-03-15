const createMusic = `
    CREATE TABLE IF NOT EXISTS MUSIC (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        artist VARCHAR,
        music VARCHAR,
        feat VARCHAR NULL,
        primaryType VARCHAR,
        secondaryType NULL,
        launch VARCHAR NULL,
        avatar VARCHAR NULL

    )

`

module.exports = createMusic