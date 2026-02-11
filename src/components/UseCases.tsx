import { Workflow, Activity, Radio, LineChart } from 'lucide-react'

export const UseCases = () => {
  return (
    <section id="technology" className="py-24 px-6 bg-gradient-to-b from-darkblue-900 to-darkblue-850 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-700/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              The Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our system integrates MQTT and Modbus protocols into a unified monitoring platform. The platform 
            connects to existing industrial equipment and processes sensor data in real time, displaying 
            predictive insights through an intuitive web dashboard.
          </p>
        </div>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">System Overview</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-darkblue-900 rounded-xl p-8 border-2 border-primary-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-darkblue-800 to-primary-600 rounded flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-600 font-semibold">IoT Layer</div>
                  <h4 className="text-xl font-bold text-white">Device Connectors</h4>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Connects to industrial devices via MQTT and Modbus protocols, capturing real-time sensor data 
                and equipment telemetry without disrupting existing operations.
              </p>
            </div>
            
            <div className="bg-darkblue-900 rounded-xl p-8 border-2 border-darkblue-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-darkblue-600 to-darkblue-800 rounded flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-darkblue-600 font-semibold">Platform</div>
                  <h4 className="text-xl font-bold text-white">Web Dashboard</h4>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Processes and analyzes orchestrated sensor data in real time, displaying equipment health metrics and 
                automated insights through a responsive web interface.
              </p>
            </div>
          </div>
        </div>
        
        {/* Deliverables */}
        <div className="space-y-16">
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-sm uppercase tracking-widest text-primary-600 font-semibold">
                Deliverable 1
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">IoT Ingestion Service</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Microservice architecture that connects to MQTT brokers and Modbus controllers, 
                  normalizing data from heterogeneous sources into a unified format for real-time processing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong>MQTT & Modbus Support</strong> – Native protocol handlers for industrial IoT
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong>Real-Time Streaming</strong> – Kafka-based event processing pipeline
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong>Multi-Tenant Isolation</strong> – Complete data separation per organization
                    </span>
                  </li>
                </ul>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-darkblue-600">
                <img 
                  src="/pics/iotPic.png" 
                  alt="IoT Ingestion Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-sm uppercase tracking-widest text-darkblue-600 font-semibold">
                Deliverable 2
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 aspect-square rounded-xl overflow-hidden border-2 border-darkblue-600">
                <img 
                  src="/pics/dataStream.png" 
                  alt="Real-Time Data Streaming Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-white mb-6">Real-Time Data Streaming</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Apache Kafka-powered event streaming architecture that processes millions of sensor readings per second 
                  with guaranteed delivery, enabling real-time monitoring and instant alerting across all connected devices.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-darkblue-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong>High-Throughput Ingestion</strong> – Process thousands of messages per second from MQTT/Modbus sources
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-darkblue-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong>Tenant-Isolated Topics</strong> – Separate Kafka topics per tenant ensure complete data isolation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-darkblue-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong>Persistent Storage</strong> – Event replay capability for analytics and debugging
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
