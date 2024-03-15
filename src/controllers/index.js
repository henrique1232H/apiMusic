const sqlConnection = require("../database/sqlite")


class Controllers {
    async create(req, res) {
        const {music,avatar,artist,launch} = req.body;

        const database = await sqlConnection();

        const checkIfMusicExists = await database.get("SELECT * FROM MUSIC WHERE music = (?)", [music]);

        if(checkIfMusicExists) {
            return res.status(401).send({
                message: "This Music is already launch in system"
            })
        }

        database.run("INSERT INTO MUSIC (music, artist, launch) VALUES (?,?,?)", [music,artist,launch])

        res.status(201).send({
            artist,
            music,
            launch
        })
        

    }


    async showMusic(req, res) {
        const id = req.params.id

        const database = await sqlConnection()

        const allMusic = await database.get("SELECT * FROM MUSIC WHERE id = (?)", [id]);

        res.send(allMusic)
    }

    async deleteMusic(req, res) {
        const id = req.params.id;

        const database = await sqlConnection();

        const musicChose = await database.get("SELECT * FROM MUSIC WHERE id = (?)",[id]) 
        await database.run("DELETE FROM MUSIC WHERE id = (?)", [id]);



        res.status(200).send({
            message: `Delete music: ${musicChose.music} from ${musicChose.artist}`
        })
    }


    async updateMusic(req, res) {
        const {music} = req.body;
        const id = req.params.id

        console.log(music)

        res.send("alo")
    }
}


module.exports = Controllers