import { Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Rami Khalil',
    role: 'Software Engineer',
    image: '/pics/ramiPic.jpeg',
    linkedin: 'https://www.linkedin.com/in/rami-khalil-2133b4206/' // Add LinkedIn URL here
  },
  {
    name: 'Christopher Le',
    role: 'Software Engineer',
    image: '/pics/chrisPic.jpeg',
    linkedin: 'https://www.linkedin.com/in/sirhcle/' // Add LinkedIn URL here
  },
  {
    name: 'Samer Nakour',
    role: 'Software Engineer',
    image: '/pics/samerPic.jpeg',
    linkedin: 'https://www.linkedin.com/in/samer-nakour/' // Add LinkedIn URL here
  },
  {
    name: 'Yazan El-Taha',
    role: 'Software Engineer',
    image: '/pics/yazanPic.jpeg',
    linkedin: 'https://www.linkedin.com/in/yazan-el-taha-0007yz/' // Add LinkedIn URL here
  },
  {
    name: 'Khaled Houari',
    role: 'Software Engineer',
    image: '/pics/khaledPic.jpeg',
    linkedin: 'https://www.linkedin.com/in/khaledhouari/' // Add LinkedIn URL here
  },
  {
    name: 'Yeakin Alies',
    role: 'Software Engineer',
    image: '/pics/yeakinPic.jpeg',
    linkedin: 'https://www.linkedin.com/in/yeakin-hossain-alies-1b310531a/' // Add LinkedIn URL here
  }
]

export const Team = () => {
  return (
    <section id="team" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-darkblue-900 relative overflow-x-hidden max-w-full">
      {/* Subtle accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              The Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The multidisciplinary team bringing this platform to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-gradient-to-br from-darkblue-800 to-darkblue-900 rounded-xl p-8 border border-primary-900/50 hover:border-primary-600 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/20 hover:-translate-y-1">
              <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden border-3 border-primary-600 ring-4 ring-primary-900/30 group-hover:ring-primary-600/30 transition-all">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-primary-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 text-center mb-4">
                {member.role}
              </p>
              <div className="flex justify-center">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-900/30 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
