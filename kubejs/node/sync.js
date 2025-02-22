
const fs = require("fs")
const path = require("path")

const fromBase = "../startup_scripts"
const toBases = [
    "../client_scripts",
    "../server_scripts"
]
const toCopies = [
    "sync"
]

if (!fs.existsSync(fromBase)) {
    console.error(`base path '${fromBase}' not found, skipping`)
    process.exit()
}

for (const toCopy of toCopies) {
    const fromPath = path.join(fromBase, toCopy)
    if (!fs.existsSync(fromPath)) {
        console.warn(`path '${fromPath}' not exist, skipping`)
        continue
    }

    for (const toBase of toBases) {
        const toPath = path.join(toBase, toCopy)
        if (fs.existsSync(toPath)) {
            if (fs.statSync(toPath).isDirectory()) {
                console.log(`copy target path '${toPath}' existed, removing`)
                fs.rmSync(toPath, { "recursive": true})
            } else {
                continue
            }
        }
        console.log(`copying from '${fromPath}' to '${toPath}'`)
        fs.cp(fromPath, toPath, { "recursive": true }, (err) => {
            if (err != null) {
                console.error(err)
            }
        })
    }
}
