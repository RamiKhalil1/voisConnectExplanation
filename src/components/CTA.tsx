import { Globe, Linkedin } from 'lucide-react'

export const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-darkblue-850 via-darkblue-900 to-darkblue-950 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Supervision Section */}
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-widest text-primary-600 font-semibold mb-4">
              Project Organization
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Under Optik Consultancy
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              This project was developed under the supervision and guidance of Optik Consultancy
            </p>
            
            {/* Optik Logo */}
            <div className="mb-12">
              <div className="inline-block rounded-full overflow-hidden border-2 border-primary-600">
                <img 
                  src="/pics/optikPic.jpeg" 
                  alt="Optik Consultancy Logo" 
                  className="h-20 w-20 object-cover"
                />
              </div>
            </div>
            
            {/* Supervisors */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8">Project Supervisors</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-darkblue-800 to-darkblue-900 rounded-xl p-8 border border-primary-900/50 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20">
                  <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden border-3 border-primary-600 ring-4 ring-primary-900/30">
                    <img 
                      src="/pics/osmanPic.jpeg" 
                      alt="Osman Mah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white text-center mb-1">
                    Osman Mah
                  </h4>
                  <p className="text-sm text-gray-400 text-center">
                    Director
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-darkblue-800 to-darkblue-900 rounded-xl p-8 border border-primary-900/50 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20">
                  <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden border-3 border-primary-600 ring-4 ring-primary-900/30">
                    <img 
                      src="/pics/jasminePic.png" 
                      alt="Jasmine Trinh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white text-center mb-1">
                    Jasmine Trinh
                  </h4>
                  <p className="text-sm text-gray-400 text-center">
                    Project Supervisor
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Original Partners Section */}
          <div className="border-t border-darkblue-700 pt-16">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-widest text-primary-600 font-semibold mb-4">
              Client Partner
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Developed for VEPRM
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              This IoT data orchestration platform was built to solve real-world operational 
              challenges for VEPRM's industrial monitoring needs
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-darkblue-800 to-primary-900 rounded-xl p-12 border border-primary-700">
            <div className="text-center space-y-6">
              <div>
                <a href="https://www.VEPRM.com/" target="_blank" rel="noopener noreferrer" className="mx-auto flex items-center justify-center mb-4">
                  <img 
                    src="/pics/VEPRM.svg" 
                    alt="VEPRM Logo" 
                    className="h-24"
                  />
                </a>
                <a href="https://www.VEPRM.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    VEPRM
                  </h3>
                </a>
                <div className="flex items-center justify-center gap-4">
                  <a href="https://www.VEPRM.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors" title="VEPRM Website">
                    <Globe className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/VEPRM/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors" title="VEPRM Company LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              {/* Client Contact */}
              <div className="pt-6 border-t border-primary-700/30">
                <p className="text-sm text-primary-400 mb-4 uppercase tracking-wider">Client Contact</p>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-primary-600 ring-4 ring-primary-900/30 mb-4">
                    <img 
                      src="/pics/nathanPic.jpeg" 
                      alt="Nathan Karpagam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    Nathan Karpagam
                  </h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Client Representative
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/nathanbk/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-900/30 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
