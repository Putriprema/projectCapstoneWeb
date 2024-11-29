import app from "./app.js"

const PORT = 1000

app.get("/", (req, res) => {
res.send(`Server berjalan di port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})