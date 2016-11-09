import React from 'react'
import ReactDOM from 'react-dom'
import configRouter from './routes/configRouter'

const router = configRouter()

let app = document.getElementById('app')

ReactDOM.render(<div>{ router }</div>, app)