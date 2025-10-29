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

function TeamMemberCard({ member, index }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-brandOrange/30">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandYellow/5 to-brandOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Avatar Section */}
      <div className="relative p-8 pb-4">
        <div className="relative mx-auto w-32 h-32 mb-6">
          {/* Avatar Container */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow p-1 group-hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-white p-1">
              {!imageError ? (
                <img
                  src={`/images/team/avatar-${index + 1}.jpg`}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-brandOrange">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-black mb-2 group-hover:text-brandOrange transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-brandOrange font-semibold text-sm mb-1">
            {member.position}
          </p>
          {member.role && (
            <p className="text-gray-600 text-sm">
              {member.role}
            </p>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

function Team() {
  const boardMembers = [
    {
      name: "MUTETELI Eugenie",
      position: "President",
      role: "Legal Representative"
    },
    {
      name: "NIMEPATA MUHOZI Paul",
      position: "Vice President", 
      role: "Deputy Legal Representative"
    },
    {
      name: "BIRAHAMYE Emmanuel",
      position: "Board Member",
      role: "Strategic Planning"
    },
    {
      name: "MUGABO Emmanuel",
      position: "Board Member",
      role: "Operations"
    },
    {
      name: "MUDENGE Norman",
      position: "Board Member",
      role: "Finance"
    },
    {
      name: "MURENZI RWIHA Laurence",
      position: "Board Member",
      role: "Programs"
    },
    {
      name: "RUGAMBA Vianney",
      position: "Board Member",
      role: "Community Relations"
    },
    {
      name: "MURORA Agnès",
      position: "Board Member",
      role: "Women's Affairs"
    },
    {
      name: "MUTESI Doreen",
      position: "Board Member",
      role: "Youth Development"
    },
    {
      name: "MUTETELI Jeanne",
      position: "Board Member",
      role: "Education"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-brandOrange/20 to-brandYellow/30 py-20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Meet Our <span className="gradient-text">Leadership</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our dedicated board members bring diverse expertise and unwavering commitment to advancing PHDM's mission of transforming lives through faith, healing, and empowerment.
          </p>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20">
        <div className="container-xl">
          <SectionHeading accent="Board" title="Members" />
          
          <p className="text-center text-black/80 text-lg max-w-4xl mx-auto mb-16 leading-relaxed">
            Our board members are committed leaders who guide PHDM's strategic direction, ensuring we remain faithful to our mission while adapting to the evolving needs of our community.
          </p>

          {/* Board Members Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
            {boardMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Leadership Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="card-modern bg-gradient-to-r from-brandOrange/10 to-brandYellow/10 text-center">
              <h3 className="text-2xl font-bold gradient-text mb-6">Our Leadership Commitment</h3>
              <p className="text-black/80 text-lg leading-relaxed mb-6">
                Each board member serves with integrity, wisdom, and a deep commitment to our community. 
                Together, they ensure that PHDM remains a beacon of hope, healing, and transformation for all who seek God's love and purpose.
              </p>
              <div className="grid gap-6 sm:grid-cols-3 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-bold text-lg gradient-text mb-2">Vision</h4>
                  <p className="text-sm text-black/70">Strategic direction and long-term planning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-bold text-lg gradient-text mb-2">Stewardship</h4>
                  <p className="text-sm text-black/70">Responsible oversight and governance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h4 className="font-bold text-lg gradient-text mb-2">Service</h4>
                  <p className="text-sm text-black/70">Dedicated service to our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brandOrange/10 to-brandYellow/10">
        <div className="container-xl text-center">
          <h3 className="text-3xl font-bold gradient-text mb-6">Join Our Mission</h3>
          <p className="text-black/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Be part of the transformation happening in our community. Whether through prayer, service, or support, your involvement makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Get Involved</a>
            <a href="/give" className="btn-secondary">Support Our Work</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
