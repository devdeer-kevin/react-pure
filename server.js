import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import renderApp from './dist/server/ServerApp.js'

// __dirname is what ever directory this file is in
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 3001

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString()

// This is janky for a reason
const parts = html.split('not rendered')

const app = express()
app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')))

app.use((req, res) => {
    res.write(parts[0])
    const stream = renderApp(req.url, {
        onShellReady() {
            // if it is the crawler, do nothing here
            stream.pipe(res)
        },
        onShellError() {
            // do error handling here
        },
        onAllReady() {
            // if it is the crawler, stream.pipe() here

            // last thing to write
            res.write(parts[1])
            res.end()
        },
        onError(err) {
            console.error(err)
        },
    })
})

console.log(`Listening on port http://localhost:${PORT}`)
app.listen(PORT)
