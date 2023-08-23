import React from 'react'
import ReactDOM from 'react-dom/client'

import { Root } from './entrypoint'

import 'normalize.css'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
