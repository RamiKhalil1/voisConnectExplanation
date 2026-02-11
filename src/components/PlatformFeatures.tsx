import { BarChart3, Gauge, Workflow, FileText, Calendar, MessageSquare, UserPlus, Database } from 'lucide-react'

export const PlatformFeatures = () => {
  const features = [
    {
      icon: Database,
      title: 'Multi-Tenancy & Sites',
      description: 'Enterprise-ready multi-tenant architecture with complete data isolation per organization.',
      details: [
        'Tenant-per-database architecture for data isolation',
        'Multiple site support within each tenant',
        'Subdomain-based tenant routing',
        'Site-level sensor and workflow organization',
        'Cross-site analytics and reporting'
      ]
    },
    {
      icon: UserPlus,
      title: 'User Management',
      description: 'Role-based access control and user invitation system for team collaboration.',
      details: [
        'Invite users via email with automatic onboarding',
        'Role-based permissions (Admin, Manager, Technician)',
        'Multi-tenant user isolation',
        'Activity audit logs',
        'SSO integration support'
      ]
    },
    {
      icon: BarChart3,
      title: 'Dashboard',
      description: 'Real-time streaming visualization of equipment health and performance metrics from Kafka event streams.',
      details: [
        'Live telemetry streaming from MQTT and Modbus sensors',
        'Stream-powered customizable widgets for equipment monitoring',
        'Historical trend analysis from time-series data streams',
        'Real-time alert notifications via event stream processing',
        'Multi-site streaming overview with drill-down capabilities'
      ]
    },
    {
      icon: Gauge,
      title: 'Sensors Management',
      description: 'Comprehensive sensor configuration with continuous data stream monitoring and Kafka integration.',
      details: [
        'Register and configure MQTT/Modbus sensors for streaming',
        'Real-time data stream visualization and monitoring',
        'Sensor health tracking through continuous event streams',
        'Custom streaming transformation rules and processors',
        'Live stream preview with configurable sampling intervals'
      ]
    },
    {
      icon: Workflow,
      title: 'Workflow Engine',
      description: 'Visual workflow builder for automating maintenance tasks and alert routing based on sensor data.',
      details: [
        'Drag-and-drop workflow designer',
        'Trigger conditions based on sensor thresholds',
        'Multi-step automation with branching logic',
        'Integration with external systems via webhooks',
        'Workflow versioning and testing environment'
      ]
    },
    {
      icon: FileText,
      title: 'Reports',
      description: 'Automated report generation for equipment performance, maintenance logs, and operational insights from orchestrated data.',
      details: [
        'Scheduled report generation (daily, weekly, monthly)',
        'Customizable report templates',
        'PDF export with charts and data tables',
        'Equipment downtime analysis',
        'Data-driven operational recommendations'
      ]
    },
    {
      icon: Calendar,
      title: 'Calendar & Scheduling',
      description: 'Maintenance calendar for scheduling preventive maintenance and tracking equipment service history.',
      details: [
        'Schedule preventive maintenance tasks',
        'Equipment service history tracking',
        'Technician assignment and availability',
        'Automated reminders and notifications',
        'Integration with workflow triggers'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Team Chat',
      description: 'Real-time messaging system for collaboration between tenant members and maintenance teams.',
      details: [
        'Direct messaging between team members',
        'Group channels for different sites or projects',
        'Share equipment updates and maintenance notes',
        'File attachments and media sharing',
        'Message history and search functionality'
      ]
    }
  ]

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-darkblue-900 to-darkblue-950 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              Platform Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Feature Set
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive platform designed for industrial IoT orchestration, combining real-time monitoring, 
            predictive analytics, and workflow automation in a multi-tenant SaaS architecture.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="bg-darkblue-800 rounded-xl p-8 border border-primary-900 hover:border-primary-600 transition-all"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-900 to-darkblue-700 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="bg-darkblue-900 rounded-lg p-6 border border-darkblue-700">
                      <h4 className="text-sm uppercase tracking-wider text-primary-400 font-semibold mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
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
