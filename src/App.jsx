import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import TeamPage from './pages/Team.jsx'
import NewsPage from './pages/News.jsx'
import MinistriesPage from './pages/Ministries.jsx'
import EventsPage from './pages/Events.jsx'
import GivePage from './pages/Give.jsx'
import ContactPage from './pages/Contact.jsx'

function NotFound() {
  return (
    <section className="section">
      <div className="container-xl text-center">
        <h1 className="text-5xl font-extrabold text-black">404</h1>
        <p className="mt-2 text-black/70">Page not found.</p>
        <a href="/" className="btn-primary mt-6 inline-block">Go Home</a>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
