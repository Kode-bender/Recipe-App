import express from 'express'
import 'dotenv/config'
import { ENV } from './config/env.js'
import cors from 'cors'
import favoriteRoutes from './routes/favorites.js'

const app = express()
const port = ENV.PORT || 5001

app.use(express.json())
app.use(cors())
app.use("/api/favorites", favoriteRoutes)

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true
    })
})

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`); 
})