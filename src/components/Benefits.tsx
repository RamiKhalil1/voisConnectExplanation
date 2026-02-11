import { Target } from 'lucide-react'

export const Benefits = () => {
  return (
    <section id="goal" className="py-24 px-6 bg-gradient-to-b from-darkblue-900 via-darkblue-850 to-darkblue-900 relative">
      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-950/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-10">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              Project Goal
            </span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
          Orchestrating Industrial IoT Data for Operational Intelligence
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Industrial facilities generate massive amounts of data from diverse sources — MQTT sensors, 
              Modbus controllers, legacy equipment, and operational systems. The challenge isn't just collecting 
              this data, but <strong className="text-primary-400 font-semibold">streaming and orchestrating it</strong> into a unified, real-time platform.
            </p>
            
            <p>
              Our platform acts as the central data streaming orchestration layer: ingests from heterogeneous protocols, 
              normalizes through streaming transformations, routes via Kafka event streams with topic partitioning, 
              processes with consumer groups for parallelism, stores in time-series databases, and delivers to 
              microservices in real time — transforming raw sensor streams into actionable operational intelligence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-darkblue-800 to-darkblue-900 rounded-2xl p-8 border border-primary-900/50 hover:border-primary-600/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-900/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center ring-2 ring-primary-900/30 group-hover:ring-primary-600/50 transition-all">
                  <Target className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-gray-300 pt-2">
                  Ingest and normalize data from MQTT, Modbus, and diverse industrial protocols
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center ring-2 ring-primary-900/30 group-hover:ring-primary-600/50 transition-all">
                  <Target className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-gray-300 pt-2">
                  Stream telemetry through Kafka pipelines with topic partitioning and parallel processing
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center ring-2 ring-primary-900/30 group-hover:ring-primary-600/50 transition-all">
                  <Target className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-gray-300 pt-2">
                  Process event streams across 14+ microservices with complete tenant isolation
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center ring-2 ring-primary-900/30 group-hover:ring-primary-600/50 transition-all">
                  <Target className="w-5 h-5 text-primary-400" />
                </div>
                <p className="text-gray-300 pt-2">
                  Deliver insights through dashboards, workflows, reports, and real-time alerts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
