import { useState } from 'react'

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

function NewsCard({ article, featured = false }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <article className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
      featured ? 'bg-white' : 'bg-white'
    } border border-gray-100 hover:border-brandOrange/30`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandYellow/5 to-brandOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
          {!imageError ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center">
              <span className="text-6xl">📰</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              article.category === 'Ministry Update' ? 'bg-brandOrange text-white' :
              article.category === 'Event' ? 'bg-brandYellow text-black' :
              article.category === 'Community' ? 'bg-green-500 text-white' :
              'bg-blue-500 text-white'
            }`}>
              {article.category}
            </span>
          </div>
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span>📅</span>
            <time>{article.date}</time>
            <span>•</span>
            <span>{article.readTime} read</span>
          </div>
          
          <h3 className={`font-bold mb-3 group-hover:text-brandOrange transition-colors duration-300 ${
            featured ? 'text-xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center">
                <span className="text-sm font-bold text-black">{article.author.charAt(0)}</span>
              </div>
              <span className="text-sm text-gray-600">{article.author}</span>
            </div>
            
            <button className="text-brandOrange hover:text-brandYellow font-semibold text-sm transition-colors duration-300 flex items-center gap-1 group">
              Read More
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function News() {
  const newsArticles = [
    {
      id: 1,
      title: "PHDM Launches New Education Program for Vulnerable Children",
      excerpt: "We're excited to announce the launch of our comprehensive Early Childhood Development program, providing education, nutrition, and support to children in need across our community.",
      image: "/images/news/1.jpg",
      category: "Ministry Update",
      date: "December 15, 2024",
      readTime: "3 min",
      author: "PHDM Ministry",
      featured: true
    },
    {
      id: 2,
      title: "Annual Christmas Celebration - Join Us This Sunday",
      excerpt: "Celebrate the birth of our Savior with us this Christmas! Special service, community feast, and gift distribution for families in need.",
      image: "/images/news/2.jpg",
      category: "Event",
      date: "December 12, 2024",
      readTime: "2 min",
      author: "Events Team"
    },
    {
      id: 3,
      title: "Women's Empowerment Program Graduation Ceremony",
      excerpt: "Congratulations to 25 women who completed our vocational training program! They're now equipped with skills to start their own businesses.",
      image: "/images/news/3.jpg",
      category: "Community",
      date: "December 10, 2024",
      readTime: "4 min",
      author: "Community Team"
    },
    {
      id: 4,
      title: "Health Program Reaches 500+ Community Members",
      excerpt: "Our community health initiative has successfully provided health education, mental health support, and wellness programs to over 500 community members.",
      image: "/images/news/4.jpg",
      category: "Ministry Update",
      date: "December 8, 2024",
      readTime: "3 min",
      author: "Health Team"
    },
    {
      id: 5,
      title: "Youth Ministry Winter Camp Registration Open",
      excerpt: "Registration is now open for our annual Youth Winter Camp! Join us for a week of spiritual growth, fun activities, and fellowship.",
      image: "/images/news/5.jpg",
      category: "Event",
      date: "December 5, 2024",
      readTime: "2 min",
      author: "Youth Team"
    },
    {
      id: 6,
      title: "Prayer and Healing Session Testimonies",
      excerpt: "Read powerful testimonies from our recent prayer and healing sessions. God is moving in miraculous ways in our community!",
      image: "/images/news/6.jpg",
      category: "Community",
      date: "December 3, 2024",
      readTime: "5 min",
      author: "Prayer Team"
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Ministry Update', 'Event', 'Community']

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-brandOrange/20 to-brandYellow/30 py-20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Latest <span className="gradient-text">News</span> & Updates
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest happenings, ministry updates, and community events at PHDM. 
            Discover how God is moving in our community and beyond.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container-xl">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brandOrange text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-brandYellow hover:text-black border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {selectedCategory === 'All' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Featured Story</h3>
              <div className="max-w-4xl mx-auto">
                <NewsCard article={newsArticles[0]} featured={true} />
              </div>
            </div>
          )}

          {/* News Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.slice(selectedCategory === 'All' ? 1 : 0).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-brandOrange/10 to-brandYellow/10">
        <div className="container-xl text-center">
          <h3 className="text-3xl font-bold gradient-text mb-6">Stay Updated</h3>
          <p className="text-black/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Subscribe to our newsletter to receive the latest news, ministry updates, and event announcements directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-brandOrange focus:outline-none transition-colors duration-300"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
