export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-darkblue-950 text-white py-12 px-6 border-t border-primary-900/30 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 flex items-center">
                <img 
                  src="/pics/voisConnectlogo.svg" 
                  alt="VOIS Connect Logo" 
                  className="h-12"
                />
              </div>
              <div>
                <div className="text-lg font-bold">VOIS Connect</div>
                <div className="text-sm text-primary-400">Orchestrating Platform</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Real-time data streaming platform powered by Kafka event streams for industrial IoT orchestration, 
              processing millions of sensor readings per second across multi-tenant microservices.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            © {currentYear} VEPRM Team at Optik Consultancy. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            This presentation is for educational and research purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
