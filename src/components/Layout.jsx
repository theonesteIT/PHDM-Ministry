import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout


