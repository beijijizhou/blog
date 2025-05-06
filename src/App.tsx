import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Link to="/blog">
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500 transition-colors duration-200"
        >Go to Blog</button>
      </Link>
    </div>
  )
}

export default App
