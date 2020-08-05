const profiler = require('v8-profiler-node8');
const process = require('process');
const path = require('path');
const fs = require('fs');

var profilerRunning = false;
function toggleProfiling() {
    if(profilerRunning) {
        const profiler1 = profiler.stopProfiling();
        console.log('end profile')
        profiler1.export()
            .pipe(fs.createWriteStream(path.resolve(process.env.HOME, './myapp-' + Date.now() + '.cpuprofile')))
            .on('finish', profiler.deleteAllProfiles)
        
        profilerRunning = false
        return;
    }

    profiler.startProfiling()
    profilerRunning = true
    console.log('started profiling')
}

toggleProfiling();
process.on('SIGTERM', () => {
    toggleProfiling()
})


const express = require('express')
const helper = require('./helper')

const app = express()
app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="zh-CN">
            <head>
                <title>宁XX播放器</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="keywords" content="播放器, 热门电视剧, 上映">
                <meta name="description" content="最权威的电视剧播放指南, 你值得拥有">
            </head>
            <body>
                <div id="root"></div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `)
})

app.get('/api/data.json', (req, res, next) => {
    helper.getInitData().then((data) => {
        res.send(data)
    })
})

app.listen(4100, () => {
    console.log('The server is at port 4100')
})