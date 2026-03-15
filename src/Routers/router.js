const { Router } = require("express") 
const pruebaRouter = require("./pruebaRouter")

const  router = Router()

router.use("/prueba", pruebaRouter)


module.exports = router;