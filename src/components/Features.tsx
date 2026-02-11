import { X, Check } from 'lucide-react'

export const Features = () => {
  return (
    <section id="gap" className="py-24 px-6 bg-gradient-to-b from-darkblue-800 via-darkblue-850 to-darkblue-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              The Challenge
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Gap in Industrial Operations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Industrial facilities lack a unified platform to orchestrate data from diverse IoT protocols 
            into actionable intelligence for real-time operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without Our Platform */}
          <div className="group bg-gradient-to-br from-darkblue-900 to-darkblue-950 rounded-2xl border-2 border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-red-900/20 rounded-full mb-6 ring-4 ring-red-900/10 group-hover:ring-red-600/20 transition-all">
              <X className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-8">Without Our Platform</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">No unified monitoring across protocols</h4>
                <p className="text-gray-300">
                  Teams cannot see MQTT and Modbus devices together in one system
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">Reactive maintenance only</h4>
                <p className="text-gray-300">
                  Equipment failures happen without warning — downtime is unpredictable
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">Manual data analysis</h4>
                <p className="text-gray-300">
                  Engineers spend hours manually reviewing logs and sensor readings
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">Isolated data silos</h4>
                <p className="text-gray-300">
                  Each facility or team manages their own disconnected systems
                </p>
              </div>
            </div>
          </div>
          
          {/* With Our Platform */}
          <div className="group bg-gradient-to-br from-primary-950 via-primary-900 to-darkblue-900 rounded-2xl border-2 border-primary-600/50 p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/40 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-900/20 rounded-full mb-6 ring-4 ring-green-900/10 group-hover:ring-green-600/20 transition-all">
              <Check className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-8">With Our Platform</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary-300 mb-2">Real-time data streaming</h4>
                <p className="text-gray-200">
                  Kafka-powered event streams process millions of sensor readings per second with zero data loss
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-300 mb-2">Stream-based intelligence</h4>
                <p className="text-gray-200">
                  Continuous event stream processing detects anomalies and triggers workflows in milliseconds
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-300 mb-2">Live collaboration streams</h4>
                <p className="text-gray-200">
                  WebSocket-powered real-time messaging synchronized across teams via event streams
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-300 mb-2">Isolated stream processing</h4>
                <p className="text-gray-200">
                  Topic-partitioned Kafka streams ensure complete tenant data isolation and parallel processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
