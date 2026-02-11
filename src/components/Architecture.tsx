import { Building2, Database, Network, Shield, Globe, Server } from 'lucide-react'

export const Architecture = () => {
  return (
    <section id="architecture" className="py-24 px-6 bg-gradient-to-br from-darkblue-800 via-darkblue-850 to-darkblue-900 relative">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-700/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-primary-400 bg-primary-950/50 px-4 py-2 rounded-full uppercase tracking-widest font-semibold border border-primary-800">
              System Architecture
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Multi-Tenant Architecture
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade architecture designed for complete data isolation, scalability, and security 
            in multi-organization deployments.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="mb-16">
          <div className="bg-darkblue-900 rounded-xl p-8 border-2 border-primary-700">
            <h3 className="text-2xl font-bold text-white mb-6">Tenant-Per-Database Model</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Each organization (tenant) operates with a completely isolated database instance, ensuring 
              absolute data separation and security. No shared tables, no risk of data leakage between organizations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-darkblue-800 rounded-lg p-6 border border-darkblue-700">
                <Database className="w-8 h-8 text-primary-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Database Isolation</h4>
                <p className="text-sm text-gray-300">
                  Each tenant gets a dedicated MongoDB database with isolated collections for users, sensors, workflows, and telemetry data.
                </p>
              </div>
              <div className="bg-darkblue-800 rounded-lg p-6 border border-darkblue-700">
                <Globe className="w-8 h-8 text-primary-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Subdomain Routing</h4>
                <p className="text-sm text-gray-300">
                  Tenants are identified via subdomain (e.g., acme.vois.io), with the API gateway resolving tenant context from the hostname.
                </p>
              </div>
              <div className="bg-darkblue-800 rounded-lg p-6 border border-darkblue-700">
                <Shield className="w-8 h-8 text-primary-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Security Layer</h4>
                <p className="text-sm text-gray-300">
                  All database queries are tenant-scoped with middleware validation. Inter-service communication uses JWT authentication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Site Support */}
        <div className="mb-16">
          <div className="bg-darkblue-900 rounded-xl p-8 border border-primary-900">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-10 h-10 text-primary-400" />
                  <h3 className="text-2xl font-bold text-white">Multiple Sites Per Tenant</h3>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Organizations can manage multiple physical locations (sites) within their tenant. Each site 
                  can have its own sensors, workflows, and user assignments while maintaining centralized reporting.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong className="text-white">Site-Level Organization:</strong> Sensors and workflows are organized by site for easier management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong className="text-white">Cross-Site Analytics:</strong> Compare performance metrics across different locations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">
                      <strong className="text-white">Centralized Control:</strong> Manage all sites from a single dashboard
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-darkblue-800 rounded-lg p-8 border border-darkblue-700">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-400 font-semibold mb-2">Example Hierarchy</div>
                    <div className="bg-darkblue-900 rounded-lg p-4 border border-darkblue-600">
                      <div className="text-sm text-white font-semibold mb-3">🏢 Acme Manufacturing</div>
                      <div className="ml-4 space-y-2 text-sm text-gray-300">
                        <div>📍 Detroit Plant</div>
                        <div className="ml-4 text-xs text-gray-400">• 24 Sensors • 8 Workflows</div>
                        <div>📍 Chicago Warehouse</div>
                        <div className="ml-4 text-xs text-gray-400">• 16 Sensors • 5 Workflows</div>
                        <div>📍 Austin R&D Facility</div>
                        <div className="ml-4 text-xs text-gray-400">• 12 Sensors • 3 Workflows</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Microservices Architecture */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Microservices Architecture</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, title: 'API Gateway', desc: 'Tenant routing & auth' },
              { icon: Database, title: 'Ingestion Service', desc: 'MQTT/Modbus data collection' },
              { icon: Network, title: 'Realtime Service', desc: 'WebSocket live updates' },
              { icon: Shield, title: 'User Management', desc: 'Auth & RBAC control' },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-darkblue-900 rounded-lg p-6 border border-primary-900 text-center">
                  <Icon className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-300">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
