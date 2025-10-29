function MinistriesPage() {
  const ministries = [
    { 
      title: 'Sunday Worship Services', 
      desc: 'Experience dynamic worship, inspiring sermons, and powerful prayer in our main services.',
      icon: '⛪',
      time: 'Sundays 10:00 AM',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      title: 'Prayer & Healing Sessions', 
      desc: 'Dedicated times for intercession and healing where God\'s presence transforms lives.',
      icon: '🙏',
      time: 'Wednesdays 7:00 PM',
      color: 'from-green-500 to-teal-600'
    },
    { 
      title: 'Youth & Children Ministry', 
      desc: 'Empowering the next generation through mentorship, Bible study, and fun activities.',
      icon: '👨‍👩‍👧‍👦',
      time: 'Fridays 6:30 PM',
      color: 'from-pink-500 to-rose-600'
    },
    { 
      title: 'Community Outreach', 
      desc: 'Reaching the needy with love through charity, evangelism, and compassion programs.',
      icon: '🤝',
      time: 'Various Times',
      color: 'from-orange-500 to-red-600'
    },
    { 
      title: 'Discipleship Training', 
      desc: 'Equipping believers to grow spiritually and serve with purpose in their calling.',
      icon: '📖',
      time: 'Saturdays 2:00 PM',
      color: 'from-indigo-500 to-blue-600'
    },
    { 
      title: 'Media & Technology', 
      desc: 'Excellence in storytelling and tech to spread the Gospel through modern platforms.',
      icon: '📱',
      time: 'As Needed',
      color: 'from-cyan-500 to-blue-600'
    },
  ]
  
  return (
    <section className="section bg-black">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="gradient-text">Our</span> Ministries
          </h1>
          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange" />
          <p className="mt-8 text-xl text-white/80 max-w-3xl mx-auto">
            We believe in serving God and His people through powerful ministries that impact lives and build faith.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, index) => (
            <div key={ministry.title} className="card-dark group">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ministry.color} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{ministry.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brandYellow mb-2">{ministry.title}</h3>
                  <p className="text-white/60 text-sm">{ministry.time}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{ministry.desc}</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <a href="/contact" className="inline-flex items-center text-brandYellow hover:text-brandOrange transition-colors duration-300 font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="card-dark max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Join a Ministry Today</h2>
            <p className="text-white/80 text-lg mb-8">
              Every believer has a unique calling and gift. Discover where God wants you to serve 
              and make a difference in His kingdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">Get Involved</a>
              <a href="/events" className="btn-secondary">View Events</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinistriesPage


