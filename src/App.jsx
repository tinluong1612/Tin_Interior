import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/homePage/home'
import About from './pages/aboutPage/about'
import Blog from './pages/blogPage/blog'
import Pricing from './pages/pricingPage/pricing'
import Service from './pages/servicePage/service'



function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/service" element={<Service />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
