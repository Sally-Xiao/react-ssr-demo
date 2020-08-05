import express from 'express'
import React from 'react'
import cors from 'cors'
import serialize from 'serialize-javascript'
import { renderToNodeStream, renderToStaticNodeStream } from 'react-dom/server'
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
                <script>
                    window.INIT_DATA = ${serialize(data)}
                </script>
            </head>
            <body>
                <div id="root">
        `)

        const stream = renderToNodeStream(
            <App initData = {data} />
        )

        stream.pipe(res, { end: false })

        stream.on('end', () => {
            res.write(`
                </div>
                    <script src="/bundle.js"></script>
                    </body>
                </html>
            `)
            res.end()
        })
    }).catch(next)
})

app.listen(4300, () => {
    console.log('The server is at port 4300')
})