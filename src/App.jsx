import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div>
        <header>header</header>
        <div className="pages">
          {useRoutes(routes)}
        </div>
        <footer>footer</footer>
      </div>
  )
})

export default App
