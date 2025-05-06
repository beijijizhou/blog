import { Link } from 'react-router-dom'
import './App.css'
// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Link to="/blog">
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500 transition-colors duration-200"
        >Go to Blog</button>
      </Link>
      {/* <div className="mt-4">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500 transition-colors duration-200"
        >
          Increment Count
        </button>
        <p className="mt-2 text-white">Count: {count}</p>
      </div> */}
    </div>
  )
}

export default App
