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

import express from 'express'
import React from 'react'
import cors from 'cors'
import { renderToStaticNodeStream } from 'react-dom/server'
import helper from './helper'
import App from '../App'



const app = express()
app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res, next) => {
    helper.getInitData().then((data) => {
        res.write(`
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
                <div id="app">
        `)

        const stream = renderToStaticNodeStream(
            <App initData = {data} />
        )

        stream.pipe(res, { end: false })

        stream.on('end', () => {
            res.write(`
                </div>
                    </body>
                </html>
            `)
            res.end()
        })
    }).catch(next)
})

app.listen(4200, () => {
    console.log('The server is at port 4200')
})