const router = require("express").Router();
const verified = require("../../middleware/verifToken")
const sousThemeValidation = require("../../models/schemaCreationSousTheme")
const db = require("../../db/insertSousThemeDb.js")

router.post('/creationSousTheme', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = sousThemeValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    try {
        await db.insertSousTheme(jsonData.NOM_SOUS_THEME,jsonData.ID_THEME)
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("insert success")
    return

});


module.exports = router;