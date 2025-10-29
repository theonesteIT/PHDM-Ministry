function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-xl py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-brandYellow">PHDM Ministry</h3>
          <p className="mt-3 text-sm text-white/80">Faith, Hope, and Love in action.</p>
        </div>
        <div>
          <h4 className="font-semibold text-brandOrange">Visit Us</h4>
          <p className="mt-2 text-sm text-white/80">Kigali Kanombe, City, Rwanda</p>
        </div>
        <div>
          <h4 className="font-semibold text-brandOrange">Contact</h4>
          <p className="mt-2 text-sm text-white/80">Email: info@phdm.ministry</p>
          <p className="mt-1 text-sm text-white/80">Phone: +250788560756</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-xl py-4 flex items-center justify-between text-xs text-white/70">
          <p>© {new Date().getFullYear()} PHDM Ministry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brandYellow">Facebook</a>
            <a href="#" className="hover:text-brandYellow">YouTube</a>
            <a href="#" className="hover:text-brandYellow">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


