export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-10">
          <div className="space-y-4">
            <div className="inline-block animate-fade-in">
              <span className="text-xs sm:text-sm md:text-base text-primary-400 bg-primary-950/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
                Orchestrating Platform
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in px-2" style={{animationDelay: '0.2s'}}>
            Every Machine Tells a Story.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              We Built the Platform to Read It.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in px-4" style={{animationDelay: '0.4s'}}>
            Stream, orchestrate, and analyze industrial IoT data from MQTT & Modbus protocols 
            through real-time Kafka pipelines for operational intelligence
          </p>
          
          <div className="pt-4 sm:pt-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
              Multi-tenant SaaS platform that ingests heterogeneous sensor data, normalizes it through streaming 
              transformations, routes it via Kafka event streams, and delivers real-time insights across 14+ 
              microservices — processing millions of data points per second without disrupting operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-4xl mx-auto px-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-darkblue-800/30 border border-primary-900/30 hover:border-primary-600/50 transition-all hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-400">MQTT & Modbus</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">Protocol Ingestion</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-darkblue-800/30 border border-primary-900/30 hover:border-primary-600/50 transition-all hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-400">Kafka Streams</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">Real-Time Pipeline</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-darkblue-800/30 border border-primary-900/30 hover:border-primary-600/50 transition-all hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-400">14+ Services</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">Microservice Arch</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-darkblue-800/30 border border-primary-900/30 hover:border-primary-600/50 transition-all hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-400">Multi-Tenant</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">Complete Isolation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
