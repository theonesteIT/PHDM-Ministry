function EventsPage() {
  const events = [
    { 
      date: 'Sun, Dec 15', 
      time: '10:00 AM - 12:00 PM',
      name: 'Sunday Worship Service', 
      description: 'Join us for powerful worship, inspiring message, and fellowship.',
      type: 'Weekly Service',
      icon: '⛪'
    },
    { 
      date: 'Wed, Dec 18', 
      time: '7:00 PM - 8:30 PM',
      name: 'Midweek Prayer Meeting', 
      description: 'Corporate prayer and intercession for our community and world.',
      type: 'Prayer',
      icon: '🙏'
    },
    { 
      date: 'Fri, Dec 20', 
      time: '6:30 PM - 8:00 PM',
      name: 'Youth Night', 
      description: 'Fun activities, games, and Bible study for youth ages 12-18.',
      type: 'Youth',
      icon: '👨‍👩‍👧‍👦'
    },
    { 
      date: 'Sat, Dec 21', 
      time: '2:00 PM - 4:00 PM',
      name: 'Discipleship Training', 
      description: 'Growing deeper in faith through Bible study and practical application.',
      type: 'Training',
      icon: '📖'
    },
    { 
      date: 'Sun, Dec 22', 
      time: '6:00 PM - 8:00 PM',
      name: 'Christmas Celebration', 
      description: 'Special Christmas service with music, drama, and fellowship.',
      type: 'Special Event',
      icon: '🎄'
    },
    { 
      date: 'Mon, Dec 23', 
      time: '7:00 PM - 9:00 PM',
      name: 'Community Outreach', 
      description: 'Serving our community with love and compassion.',
      type: 'Outreach',
      icon: '🤝'
    },
  ]
  
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
            <span className="gradient-text">Upcoming</span> Events
          </h1>
          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange" />
          <p className="mt-8 text-xl text-black/80 max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth. All are welcome!
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {events.map((event, index) => (
            <div key={event.name} className="card-modern group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{event.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-black">{event.name}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brandOrange/10 text-brandOrange">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-black/70 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-black/60">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="card-modern bg-gradient-to-br from-brandYellow/10 to-brandOrange/10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6">Stay Connected</h2>
            <p className="text-black/80 text-lg mb-8">
              Don't miss out on our upcoming events and special services. 
              Join our community and grow in faith together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">Get Notifications</a>
              <a href="/about" className="btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsPage


