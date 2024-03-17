import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import { App } from './App'

const container = document.getElementById('wizardDevApp')

if (container) {
  ReactDOMClient.createRoot(container).render(<App />)
}
