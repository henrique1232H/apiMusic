const sqlConnection = require("../database/sqlite")

class Controllers {
    async create(req, res) {
        const {music,artist,launch, feat, primaryType} = req.body;

        const database = await sqlConnection();

        const checkIfMusicExists = await database.get("SELECT * FROM MUSIC WHERE music = (?)", [music]);



        if(checkIfMusicExists) {
            return res.status(401).send({
                message: "This Music is already launch in system"
            })
        }

        if(primaryType === undefined) {
            return res.status(401).send({
                message: "Check primary type"
            })
        }

        database.run("INSERT INTO MUSIC (music, artist, launch, feat, primaryType) VALUES (?,?,?, ?, ?)", [music,artist,launch,feat, primaryType])

        res.status(201).send({
            artist,
            music,
            launch,
            feat,
            primaryType
        })
        

    }


    async showMusic(req, res) {
        const database = await sqlConnection()

        const allMusic = await database.all("SELECT * FROM MUSIC");
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
        const change = req.body.change;
        const {type, id} = req.params;

        

        const database = await sqlConnection();

        if(type === 'music') {
          await database.run("UPDATE MUSIC SET music = (?) WHERE id = (?)", [change, id]);
        }

        if(type === 'artist') {
            await database.run("UPDATE MUSIC SET artist = (?) WHERE id = (?)", [change, id]);
          }


        res.status(200).send({
            message: `UPDATE ${change}`
        })
    }

    async seeMusicByArtist(req, res) {
        const {id} = req.params;

        const database = await sqlConnection();

        const takeMusicByArtist = await database.all("SELECT * FROM MUSIC WHERE artist = (?)", [id]);

        res.send(takeMusicByArtist)
    }
}


module.exports = Controllers