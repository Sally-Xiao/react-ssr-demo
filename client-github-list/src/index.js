import React from 'react'
import ReactDOM from 'react-dom'
import { queryInitData } from './api'

import App from './App'


queryInitData().then(data => {
    ReactDOM.render(<App initData={data} />, document.getElementById('root'))
})