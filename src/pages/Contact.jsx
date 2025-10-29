function ContactPage() {
  const contactInfo = [
    {
      title: 'Visit Us',
      description: 'Kigali Kanombe City, Rwanda',
      icon: '📍',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Call Us',
      description: '+250788560756',
      icon: '📞',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Email Us',
      description: 'info@phdm.church',
      icon: '✉️',
      color: 'from-purple-500 to-indigo-600'
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
            <span className="gradient-text">Get</span> In Touch
          </h1>
          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange" />
          <p className="mt-8 text-xl text-black/80 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us with any questions, prayer requests, or to learn more about our ministry.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="card-modern group">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{info.title}</h3>
                      <p className="text-black/80">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Times */}
            <div className="mt-12 card-modern bg-gradient-to-br from-brandYellow/10 to-brandOrange/10">
              <h3 className="text-2xl font-bold text-black mb-6">Service Times</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">Sunday Service</span>
                  <span className="text-black/80">10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">Wednesday Prayer</span>
                  <span className="text-black/80">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">Friday Youth</span>
                  <span className="text-black/80">6:30 PM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Send Us a Message</h2>
            <form className="card-modern">
              <div className="grid gap-6 sm:grid-cols-2 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">First Name</label>
                  <input 
                    className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" 
                    placeholder="Your first name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Last Name</label>
                  <input 
                    className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" 
                    placeholder="Your last name" 
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" 
                  placeholder="your.email@example.com" 
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-2">Phone (Optional)</label>
                <input 
                  type="tel" 
                  className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" 
                  placeholder="+1 (000) 123-4567" 
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-2">Subject</label>
                <select className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300">
                  <option>General Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Ministry Information</option>
                  <option>Volunteer Opportunities</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-black mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" 
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="card-modern bg-gradient-to-br from-brandYellow/10 to-brandOrange/10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6">We're Here for You</h2>
            <p className="text-black/80 text-lg mb-8">
              Whether you're new to faith, looking for a church home, or need prayer and support, 
              we're here to help you on your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about" className="btn-primary">Learn About Us</a>
              <a href="/events" className="btn-secondary">Join an Event</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage


