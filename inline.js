let fs = require("fs")
let cheerio = require("cheerio")

// Bundle an HTML file
fs.readFile('./bundle/index.html', (err,data) => {
    let $ = cheerio.load(data.toString())
    fs.readFile("./bundle/index.js", (err,js) => {
        let raw = js.toString()

        $("script").text(raw)
        fs.writeFile("./dst/index.html", $.html(), err => {
            if(!err) console.log("write file")
        })
    })
})
