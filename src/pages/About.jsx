function AboutPage() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
            <span className="gradient-text">About</span> PHD Ministry
          </h1>
          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange" />
        </div>

        {/* Hero Content */}
        <div className="mb-20">
          <div className="card-modern text-center max-w-4xl mx-auto">
            <p className="text-xl text-black/80 leading-relaxed mb-6">
              We are a Christ-centered church devoted to worship, discipleship,
              and service. Our heart is to see people transformed by the Gospel and
              equipped to impact the world.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              Join us for vibrant services, authentic community, and opportunities
              to serve. We believe church is a family where everyone has a part.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <div className="card-modern group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-black">Our Mission</h2>
            </div>
            <p className="text-black/80 leading-relaxed text-lg">
              To bring people into a personal relationship with Jesus Christ through prayer, 
              healing, and the power of the Holy Spirit, transforming lives and communities.
            </p>
          </div>
          
          <div className="card-modern group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h2 className="text-3xl font-bold text-black">Our Vision</h2>
            </div>
            <p className="text-black/80 leading-relaxed text-lg">
              To see a Spirit-filled generation walking in faith, love, and divine purpose, 
              impacting the world with God's love and power.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Our Core Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: 'Faith', desc: 'Trusting in God\'s promises', icon: '🙏' },
              { name: 'Prayer', desc: 'Communion with our Father', icon: '💫' },
              { name: 'Healing', desc: 'Restoration and wholeness', icon: '❤️' },
              { name: 'Discipleship', desc: 'Growing in Christ', icon: '📖' },
              { name: 'Compassion', desc: 'Love in action', icon: '🤝' }
            ].map((value) => (
              <div key={value.name} className="card-modern text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold gradient-text mb-3">{value.name}</h3>
                <p className="text-black/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Our Leadership</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-modern">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-6">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Pastoral Team</h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                Our dedicated pastors and leaders are committed to serving God and His people 
                with integrity, wisdom, and compassion. They provide spiritual guidance and 
                pastoral care to our congregation.
              </p>
            </div>
            
            <div className="card-modern">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-6">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Ministry Leaders</h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                We believe in raising up the next generation of leaders through mentorship, 
                training, and spiritual development. Our ministry leaders serve with passion 
                and dedication.
              </p>
            </div>
          </div>
        </div>

        {/* Service Times */}
        <div className="card-modern bg-gradient-to-br from-brandYellow/10 to-brandOrange/10">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Join Us This Week</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">⛪</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Sunday Service</h3>
              <p className="text-black/80 font-medium text-lg">10:00 AM - 12:00 PM</p>
              <p className="text-black/60 mt-2">Worship, Word, and Fellowship</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🙏</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Wednesday Prayer</h3>
              <p className="text-black/80 font-medium text-lg">7:00 PM - 8:30 PM</p>
              <p className="text-black/60 mt-2">Corporate Prayer and Intercession</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Friday Youth</h3>
              <p className="text-black/80 font-medium text-lg">6:30 PM - 8:00 PM</p>
              <p className="text-black/60 mt-2">Youth Ministry and Activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage


