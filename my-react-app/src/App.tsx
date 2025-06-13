import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './components/search/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <RootLayout>
      <div className="text-2xl text-blue-600">Hello from inside the layout!</div>
    </RootLayout>

    </>
  )
}

export default App
