import { Brain, Code, Zap, Network, Database, GitBranch } from 'lucide-react'

export const Challenges = () => {
  const challenges = [
    {
      icon: GitBranch,
      title: 'System Architecture Design',
      problem: 'Designing a scalable multi-tenant architecture with complete data isolation while maintaining performance.',
      solution: 'Implemented tenant-per-database model with subdomain routing and microservices architecture. Each service communicates via internal APIs with JWT authentication.',
      learnings: [
        'Database connection pooling strategies for multi-tenant systems',
        'Middleware design patterns for tenant context resolution',
        'Service-to-service authentication and authorization',
        'API Gateway routing and request proxying'
      ]
    },
    {
      icon: Zap,
      title: 'Real-Time Data Streaming with Kafka',
      problem: 'Processing high-volume sensor data streams in real time without data loss or performance degradation.',
      solution: 'Integrated Apache Kafka for event streaming with topic partitioning per tenant. Implemented consumer groups for parallel processing and dead letter queues for error handling.',
      learnings: [
        'Kafka cluster setup and configuration',
        'Producer/consumer patterns for IoT data',
        'Topic partitioning strategies for multi-tenancy',
        'Handling backpressure and consumer lag',
        'Error handling with dead letter topics'
      ]
    },
    {
      icon: Network,
      title: 'MQTT & Modbus Protocol Integration',
      problem: 'Supporting multiple industrial protocols (MQTT, Modbus TCP/RTU) with varying data formats and connection requirements.',
      solution: 'Built protocol-agnostic ingestion service with adapter pattern for each protocol. Created data normalization layer to unify telemetry data format.',
      learnings: [
        'MQTT broker integration (TBMQ/Mosquitto)',
        'QoS levels and retained messages',
        'Modbus TCP and RTU communication',
        'Register mapping and data type conversion',
        'Connection pooling for Modbus devices',
        'Protocol-specific error handling'
      ]
    },
    {
      icon: Database,
      title: 'Time-Series Data Management',
      problem: 'Efficiently storing and querying millions of sensor readings with high write throughput and fast aggregation queries.',
      solution: 'Implemented TimescaleDB (PostgreSQL extension) for time-series data with automatic data retention policies and continuous aggregates for pre-computed metrics.',
      learnings: [
        'TimescaleDB hypertable configuration',
        'Time-bucketing and aggregation functions',
        'Query optimization for time-series data',
        'Data retention and compression policies',
        'Balancing write performance vs query speed'
      ]
    },
    {
      icon: Brain,
      title: 'Real-Time Team Collaboration System',
      problem: 'Building a scalable real-time chat system that maintains tenant isolation and handles concurrent connections.',
      solution: 'Implemented WebSocket-based messaging service with Redis pub/sub for message distribution. Built tenant-scoped channels with message persistence in MongoDB.',
      learnings: [
        'WebSocket connection management and scaling',
        'Redis pub/sub patterns for real-time messaging',
        'Message persistence and retrieval strategies',
        'Handling connection drops and reconnection',
        'Tenant-scoped channel isolation'
      ]
    },
    {
      icon: Code,
      title: 'Workflow Engine Development',
      problem: 'Creating a flexible visual workflow builder that allows non-technical users to automate maintenance tasks.',
      solution: 'Built custom workflow engine using directed acyclic graphs (DAG) with node-based execution. Implemented React Flow for visual editing and JSON schema validation.',
      learnings: [
        'DAG execution algorithms',
        'Node type system design',
        'Visual workflow editor integration',
        'Workflow state persistence',
        'Runtime error handling and rollback strategies',
        'Testing workflow execution without affecting production'
      ]
    }
  ]

  return (
    <section id="challenges" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-darkblue-800 via-darkblue-850 to-darkblue-900 relative overflow-x-hidden max-w-full">
      {/* Accent elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 w-full px-0">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              Development Journey
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
            Challenges & Learnings
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building an industrial IoT platform required learning new technologies, solving complex 
            architectural problems, and overcoming real-world integration challenges.
          </p>
        </div>

        {/* Challenges */}
        <div className="space-y-6 md:space-y-8 w-full">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <div 
                key={index}
                className="bg-darkblue-800 rounded-xl border border-primary-900 overflow-hidden w-full"
              >
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-900 to-darkblue-700 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-400" />
                    </div>
                    <div className="flex-1 w-full">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 break-words">{challenge.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-2">
                            The Challenge
                          </div>
                          <p className="text-sm md:text-base text-gray-300 leading-relaxed break-words">
                            {challenge.problem}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-green-400 font-semibold mb-2">
                            Our Solution
                          </div>
                          <p className="text-sm md:text-base text-gray-300 leading-relaxed break-words">
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-darkblue-900 rounded-lg p-3 md:p-5 lg:p-6 border border-darkblue-700">
                    <div className="text-xs uppercase tracking-wider text-primary-400 font-semibold mb-2 md:mb-3">
                      Skills Gained
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-1.5 md:gap-y-2">
                      {challenge.learnings.map((learning, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5"></div>
                          <span className="text-xs sm:text-sm text-gray-300 leading-snug break-words">{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
