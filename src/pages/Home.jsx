import { useState, useEffect } from 'react'

function SectionHeading({ title, accent, isDark = false }) {
  return (
    <div className="mb-10 text-center">
      <h2 className={`text-3xl md:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-black'}`}>
        <span className="text-brandOrange">{accent}</span> {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange" />
    </div>
  )
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slideshow images
  const slideshowImages = [
    '/images/home/image1.jpg',
    '/images/home/image2.jpg', 
    '/images/home/image3.jpg',
    '/images/home/image4.jpg',
    '/images/home/image5.jpg'
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slideshowImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative section bg-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Slideshow Background Images */}
      {slideshowImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-brandOrange/20 to-brandYellow/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-brandYellow scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container-xl relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Transforming Lives</span><br />
              Through the Power of the Holy Spirit
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              PHD Ministry is a community of faith committed to prayer, healing, and discipleship — bringing hope to our city and the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <a href="/events" className="btn-primary">Join Us This Sunday</a>
              <a href="/give" className="btn-secondary">Give Online</a>
            </div>
            <blockquote className="text-lg text-white/80 italic border-l-4 border-brandYellow pl-6 max-w-2xl mx-auto">
              "Build an Altar to the Lord your God." — Judges 6:26
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-xl">
        <SectionHeading accent="About" title="PHDM Ministry" />
        
        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
        <div className="card-modern group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-black">Vision</h3>
            </div>
            <p className="text-black/80 leading-relaxed">
            Delivering and restoring the values, principles and doctrines of the Holy Bible for the 
            Christians to grow in faith. - 2 Timothy 2:2
            </p>
          </div>
          <div className="card-modern group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-black">Mission</h3>
            </div>
            <p className="text-black/80 leading-relaxed">
            The PHDM mission is to empower Christians through the Word of God and deliverance 
to establish priesthood to build alters for the restoration of the Kingdom of God on 
Earth. - Judges 6:23-26
            </p>
            
          </div>
        
        </div>

        {/* Values */}
        <div className="mb-16 card-modern">
          <h4 className="text-2xl font-bold text-black mb-8 text-center">Our Core Values</h4>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Christ-Centred', desc: 'We are centered on Christ in all we do' },
              { name: 'Spiritual Empowered', desc: 'Empowered by the Holy Spirit' },
              { name: 'Humbleness & Simplicity', desc: 'Living with humility and simplicity' },
              { name: 'Service & Philanthropy', desc: 'Committed to serving others' },
              { name: 'Exemplary', desc: 'Setting the highest standards' },
              { name: 'Integrity', desc: 'Honest, accountable and transparent in all activities' },
              { name: 'Passion', desc: 'Passionate about loving and engaging with God' }
            ].map((value, index) => (
              <div key={value.name} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-brandOrange/10 to-brandYellow/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">{value.name.charAt(0)}</span>
                </div>
                <span className="font-bold text-lg gradient-text mb-2 block">{value.name}</span>
                <p className="text-sm text-black/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Church History & Leadership */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="card-modern">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-black">Our Story</h3>
            </div>
            <p className="text-black/80 mb-4 leading-relaxed">
              Founded in 2016, PHDM Ministry began as a small prayer group with a vision to see lives transformed through the power of the Holy Spirit.
            </p>
            <p className="text-black/80 leading-relaxed">
              Today, we serve thousands across our community, providing spiritual guidance, healing, and hope to all who seek God's love.
            </p>
          </div>
          <div className="card-modern">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-black">Leadership</h3>
            </div>
            <p className="text-black/80 mb-4 leading-relaxed">
              Our ministry is led by dedicated pastors and leaders who are committed to serving God and His people with integrity and compassion.
            </p>
            <p className="text-black/80 leading-relaxed">
              We believe in raising up the next generation of leaders through mentorship, training, and spiritual development.
            </p>
          </div>
        </div>

        {/* Service Times */}
        <div className="card-modern bg-gradient-to-br from-brandYellow/10 to-brandOrange/10">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Join Us This Week</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⛪</span>
              </div>
              <h4 className="font-bold text-lg gradient-text mb-2">Sunday Service</h4>
              <p className="text-black/80 font-medium">10:00 AM - 12:00 PM</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🙏</span>
              </div>
              <h4 className="font-bold text-lg gradient-text mb-2">Wednesday Prayer</h4>
              <p className="text-black/80 font-medium">7:00 PM - 8:30 PM</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h4 className="font-bold text-lg gradient-text mb-2">Friday Youth</h4>
              <p className="text-black/80 font-medium">6:30 PM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatWeDo() {
  const programs = [
    {
      title: 'Evangelism & Worship',
      icon: '⛪',
      description: 'Spreading the Gospel and nurturing spiritual growth through worship and community outreach.',
      activities: [
        'Sunday worship services',
        'Prayer and healing sessions', 
        'Youth and children ministry',
        'Community outreach',
        'Discipleship training'
      ]
    },
    {
      title: 'Education Programmes',
      icon: '📚',
      description: 'Early Childhood Development initiatives focused on improving educational outcomes for vulnerable children.',
      activities: [
        'Establish Early Childhood Development centers',
        'Provide nutrition and school materials',
        'Pay school fees for children in need',
        'Support vulnerable families'
      ]
    },
    {
      title: 'Health Programmes',
      icon: '🏥',
      description: 'Community health engagement and mental wellness support for holistic healing and restoration.',
      activities: [
        'Community health education and wellness promotion',
        'Support for teen mothers through capacity building',
        'Mental health and emotional restoration programs',
        'Physical and social well-being initiatives'
      ]
    },
    {
      title: 'Women & Girls Empowerment',
      icon: '👩‍💼',
      description: 'Empowering women and girls through education, vocational training, and financial independence.',
      activities: [
        'Education and vocational training for teen mothers',
        'Re-entry programs for school dropouts',
        'Financial empowerment through savings groups',
        'Small business training and income generation'
      ]
    }
  ]

  return (
    <section id="what-we-do" className="section bg-gradient-to-br from-brandYellow/5 to-brandOrange/5">
      <div className="container-xl">
        <SectionHeading accent="What" title="We Do" />
        <p className="mx-auto mb-16 max-w-3xl text-center text-black/80 text-lg leading-relaxed">
          Through our comprehensive programs, we are transforming lives and building stronger communities across Rwanda. 
          Each initiative is designed to address critical needs while fostering hope, healing, and empowerment.
        </p>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {programs.map((program, index) => (
            <div key={program.title} className="card-modern group hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{program.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold gradient-text mb-3">{program.title}</h3>
                  <p className="text-black/80 leading-relaxed mb-4">{program.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-black mb-3 flex items-center">
                  <span className="w-2 h-2 bg-brandOrange rounded-full mr-3"></span>
                  Key Activities:
                </h4>
                <ul className="space-y-2">
                  {program.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start text-black/75">
                      <span className="text-brandYellow mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Impact Statement */}
        <div className="mt-16 card-modern bg-gradient-to-r from-brandOrange/10 to-brandYellow/10 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Our Impact</h3>
          <p className="text-black/80 text-lg leading-relaxed max-w-4xl mx-auto">
            Through these integrated programs, PHDM is building a foundation of hope, healing, and empowerment. 
            We work with vulnerable families and communities to create lasting change that transforms not just individuals, 
            but entire communities for generations to come.
          </p>
        </div>
      </div>
    </section>
  )
}

function Ministries() {
  const intro = "We believe in serving God and His people through powerful ministries that impact lives and build faith."
  const items = [
    { title: 'Sunday Worship Services', desc: 'Experience dynamic worship, inspiring sermons, and powerful prayer.' },
    { title: 'Prayer & Healing Sessions', desc: 'Dedicated times for intercession and healing — where God\'s presence transforms lives.' },
    { title: 'Youth & Children Ministry', desc: 'Empowering the next generation through mentorship, Bible study, and fun activities.' },
    { title: 'Community Outreach', desc: 'Reaching the needy with love through charity, evangelism, and compassion programs.' },
    { title: 'Discipleship Training', desc: 'Equipping believers to grow spiritually and serve with purpose.' },
  ]
  return (
    <section id="ministries" className="section bg-black">
      <div className="container-xl">
        <SectionHeading accent="Our" title="Core Ministries" isDark={true} />
        <p className="mx-auto mb-10 max-w-3xl text-center text-white/85">{intro}</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m, index) => (
            <div key={m.title} className="card-dark group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-brandYellow">{m.title}</h3>
              </div>
              <p className="text-white/80 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Events() {
  const events = [
    { date: 'Sun 10:00 AM', name: 'Sunday Worship Service' },
    { date: 'Wed 7:00 PM', name: 'Midweek Prayer' },
    { date: 'Fri 6:30 PM', name: 'Youth Night' },
  ]
  return (
    <section id="events" className="section bg-white">
      <div className="container-xl">
        <SectionHeading accent="Upcoming" title="Events" />
        <ul className="space-y-4">
          {events.map((e) => (
            <li key={e.name} className="flex items-center justify-between rounded-lg border border-black/10 p-4">
              <span className="font-semibold text-black">{e.name}</span>
              <span className="rounded-md bg-brandYellow px-3 py-1 text-sm font-semibold text-black">{e.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function LatestNews() {
  const latestNews = [
    {
      id: 1,
      title: "PHDM Launches New Education Program for Vulnerable Children",
      excerpt: "We're excited to announce the launch of our comprehensive Early Childhood Development program, providing education, nutrition, and support to children in need.",
      image: "/images/news/1.jpg",
      category: "Ministry Update",
      date: "December 15, 2024",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Annual Christmas Celebration - Join Us This Sunday",
      excerpt: "Celebrate the birth of our Savior with us this Christmas! Special service, community feast, and gift distribution for families in need.",
      image: "/images/news/2.jpg",
      category: "Event",
      date: "December 12, 2024",
      readTime: "2 min"
    },
    {
      id: 3,
      title: "Women's Empowerment Program Graduation Ceremony",
      excerpt: "Congratulations to 25 women who completed our vocational training program! They're now equipped with skills to start their own businesses.",
      image: "/images/news/3.jpg",
      category: "Community",
      date: "December 10, 2024",
      readTime: "4 min"
    }
  ]

  return (
    <section id="latest-news" className="section bg-white">
      <div className="container-xl">
        <SectionHeading accent="Latest" title="News & Updates" />
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {latestNews.map((article) => (
            <article key={article.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-brandOrange/30">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brandYellow/5 to-brandOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      article.category === 'Ministry Update' ? 'bg-brandOrange text-white' :
                      article.category === 'Event' ? 'bg-brandYellow text-black' :
                      'bg-green-500 text-white'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>📅</span>
                    <time>{article.date}</time>
                    <span>•</span>
                    <span>{article.readTime} read</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-brandOrange transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-brandOrange hover:text-brandYellow font-semibold text-sm transition-colors duration-300 flex items-center gap-1 group">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="/news" className="btn-primary">
            View All News & Updates
          </a>
        </div>
      </div>
    </section>
  )
}

function Give() {
  return (
    <section id="give" className="section bg-black text-white">
      <div className="container-xl text-center">
        <SectionHeading accent="Support" title="the Ministry" isDark={true} />
        <p className="mx-auto max-w-2xl text-white/85">
          Your giving helps us reach more people with the Gospel, care for families, and expand God's kingdom.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="/give" className="btn-primary">Give Online</a>
          <a href="/give" className="btn-secondary">Tithe & Offering</a>
          <a href="/give" className="btn-secondary">Partner With Us</a>
        </div>
        <p className="mt-4 text-xs text-white/70">Each contribution is securely processed and goes directly to ministry work and community outreach.</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-xl">
        <SectionHeading accent="Get" title="In Touch" />
        <form className="mx-auto max-w-2xl grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <input className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" placeholder="Your Name" />
            <input type="email" className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" placeholder="Your Email" />
          </div>
          <textarea rows="5" className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-brandOrange focus:outline-none transition-colors duration-300" placeholder="Your Message"></textarea>
          <button type="submit" className="btn-primary w-full md:w-auto mx-auto">Send Message</button>
        </form>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Ministries />
      <LatestNews />
      <Events />
      <Give />
      <Contact />
    </>
  )
}

export default Home


